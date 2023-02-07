import React, {useState,useEffect} from 'react';
import { Text, View, TextInput,StyleSheet,Pressable,FlatList,Dimensions,Image, Button,TouchableOpacity } from 'react-native';
import { firebase } from './config1';
import Icon from "react-native-vector-icons/Ionicons";

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT
  } = Dimensions.get('window');
  
const Plist =({route, navigation})=>{
    const {did}=route.params;

    const [doc, setDoc]=useState([]);
    const docRef=firebase.firestore().collection('PATIENT');
    const users=[]
    useEffect(()=>{

        docRef
        .onSnapshot(
            querySnapshot=>{
               
                querySnapshot.forEach((doc) => {
                    const {name, phone,gender, blood_grp}=doc.data()
                    
                    users.push({
                        id:doc.id,
                        name, phone,gender, blood_grp
                    })

                   

                })
                setDoc(users)
                //console.log(users)
                
               

            }
        )
    },[])

    return(
           
<View style={{flex:1, }}>
    <Image style={[styles._image_2, styles._image_2_3]} source={{ uri: imageUrl_image_3 }}></Image>
      <TextInput
        placeholder="Search"
        placeholderTextColor="white"
        style={styles.searchInputStyle}
      />    
    <Icon size={27} name="search" color="white" style={styles.iconStyle} />
      <FlatList
    style={{height:'100%', top:40}}
    data={doc}
    numColumns={1}
    
   
    renderItem={({item})=>(
       
        <Pressable>
            <TouchableOpacity onPress={()=>navigation.navigate('Pinfo',{pid:item.id, did:did})}>

            <View style={[styles.innerContainer,styles.container]}>
                <Text style={styles.itemHeading}>
                    {item.name}
                </Text>
                <Text style={{fontWeight:'bold'}}>
                    Phone: {item.phone}
                </Text> 
             
                {/* <Text style={{fontWeight:'bold'}}>
                    Speciality: {item.speciality}
                </Text>
                <Text style={{fontWeight:'bold'}}>
                    Location: {item.location}
                </Text> */}
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
        height:90,
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
    _image_2_3:{
        position:'absolute',
        width:'100%',
        height:'20%',
    
    
      },
      _image_2:{
        bottom:SCREEN_HEIGHT*0.9,
      },
      _image_3:{
        top:SCREEN_HEIGHT*0.9,
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
});
    
const imageUrl_image_3 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/5c0ad5d4dbcd1a5a665c056c58fcec3b"


export default Plist;