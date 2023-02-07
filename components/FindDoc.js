import React, {useState,useEffect} from 'react';
import { Text, View, TextInput,StyleSheet,Pressable,FlatList,Dimensions, Button,Image, TouchableOpacity } from 'react-native';
import { firebase } from './config1';
import Icon from "react-native-vector-icons/Ionicons";
const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT
  } = Dimensions.get('window');
  

const FindDoc =({route, navigation})=>{
    const {pid}=route.params;

    const [doc, setDoc]=useState([]);
    const docRef=firebase.firestore().collection('DOCTOR');
    const users=[]
    useEffect(()=>{

        docRef
        .onSnapshot(
            querySnapshot=>{
               
                querySnapshot.forEach((doc) => {
                    const {name, phone,speciality, degree,location}=doc.data()
                    
                    users.push({
                        id:doc.id,
                        name, phone,speciality, degree,location
                    })

                   

                })
                setDoc(users)
                //console.log(users)
                
               

            }
        )
    },[])

    return(
           
        <View style={{flex:1,}}>
            <Image style={[styles._image_2, styles._image_2_3]} source={{ uri: imageUrl_image_3 }}></Image>
      <TextInput
        placeholder="Search"
        placeholderTextColor="white"
        style={styles.searchInputStyle}
      />    
    <Icon size={27} name="search" color="white" style={styles.iconStyle} />


    <FlatList
    style={{height:'100%',top:40}}
    data={doc}
    numColumns={1}
    
   
    renderItem={({item})=>(
       
        <Pressable>
            <TouchableOpacity onPress={()=>navigation.navigate('DocInfo',{id:item.id, pid:pid})}>

            <View style={[styles.innerContainer,styles.container]}>
                <Text style={styles.itemHeading}>
                   Dr. {item.name}
                </Text>
                {/* <Text>
                    {'\n'}
                    </Text>
                    <Text>
                    Speciality: {'\n'}
                </Text> */}
                <Text style={{fontWeight:'bold'}}>
                    Speciality: {item.speciality}
                </Text>
                <Text style={{fontWeight:'bold'}}>
                    Location: {item.location}
                </Text>
            </View>

                </TouchableOpacity>
        </Pressable>
       
       
       )}
       />

  
</View>
    
)

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e5e5e5',
       padding: 15,
        borderRadius: 15,
        margin:5,
        marginHorizontal: 10,
        flexDirection:'column',
        //alignItems:'center',
        height:120,
    },
    innerContainer: {
        // alignItems: 'center',
        // flexDirection: 'row',
         paddingLeft:45,
    },
    itemHeading: {
        fontWeight: 'bold',
        fontSize:18,
        marginRight:22, 
        top:0
    },
    iconStyle: {
        top:0,
        left:10
       },
       searchInputStyle: {
         //backgroundColor:'white',
         //flex: 1,
         fontSize: 17,
         paddingVertical: 8,
         paddingHorizontal: 0,
         margin: 0,
         left:70,
         borderBottomColor:'red',
         //color: "black",
         //top:20,
        top:35,
         height:50, width: SCREEN_WIDTH*0.85,
         
       },
       _image_2_3:{
        position:'absolute',
        width:'100%',
        height:'20%',
    
    
      },
      _image_2:{
        bottom:SCREEN_HEIGHT*0.9,
      },
});
    
const imageUrl_image_3 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/5c0ad5d4dbcd1a5a665c056c58fcec3b"



export default FindDoc;