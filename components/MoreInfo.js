import React, {useState,useEffect} from 'react';
import { Text, View, TextInput,StyleSheet,Pressable,FlatList,Dimensions,Image, Button,TouchableOpacity } from 'react-native';
import { firebase } from './config1';
import Icon from "react-native-vector-icons/Ionicons";

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT
  } = Dimensions.get('window');
  
  const MoreInfo=({route})=>{
    const {pid}=route.params
    const allRef=firebase.firestore().collection('ALLERGY');
    const medRef=firebase.firestore().collection('MEDICATION');
    const all=[]
    const medi=[]
    const [aller,setAller]=useState([]);
    const [med, setMed]=useState([]);

    useEffect(()=>{
      allRef.onSnapshot(
          querySnapshot=>{
             
              querySnapshot.forEach((doc) => {
                  const {title, cause, patid}=doc.data()
                  if(pid==patid){
                  all.push({
                      id:doc.id,
                      title, cause, patid
                  })
              }
                 
      
              })
              setAller(all)
              //console.log(users)
              
             
      
          }
      )
      medRef.onSnapshot(
        querySnapshot=>{
           
            querySnapshot.forEach((doc) => {
                const {title, cause, patid}=doc.data()
                if(pid==patid){
                medi.push({
                    id:doc.id,
                    title, cause, patid
                })
            }
               
    
            })
            setMed(medi)
            //console.log(users)
            
           
    
        }
    )
        })

        //console.log(med)
return(
    <View style={{flex:1, }}>
    <Image style={[styles._image_2, styles._image_2_3]} source={{ uri: imageUrl_image_3 }}></Image>
    <Text style={[styles.itemHeading,{top:120}]}>Allergies</Text>
    
    <FlatList
    style={{height:'10%', top:140}}
    data={aller}
    numColumns={1}
    
   
    renderItem={({item})=>(
        
        <Pressable>

            <View style={[styles.innerContainer,styles.container]}>
                <Text style={styles.itemHeading}>
                    {item.title}
                </Text>
                <Text style={{fontWeight:'bold'}}>
                    Cause: {item.cause}
                </Text> 
             
                {/* <Text style={{fontWeight:'bold'}}>
                    Speciality: {item.speciality}
                </Text>
                <Text style={{fontWeight:'bold'}}>
                    Location: {item.location}
                </Text> */}
            </View>

        </Pressable>
       
       
       )}
       />

<Text style={[styles.itemHeading,{top:120}]}>Medications</Text>
<FlatList
    style={{height:'10%', top:140}}
    data={med}
    numColumns={1}
    
   
    renderItem={({item})=>(
        
        <Pressable>

            <View style={[styles.innerContainer,styles.container]}>
                <Text style={styles.itemHeading}>
                    Medication: {item.title}
                </Text>
                <Text style={{fontWeight:'bold'}}>
                    Diagnosis: {item.cause}
                </Text> 
             
                {/* <Text style={{fontWeight:'bold'}}>
                    Speciality: {item.speciality}
                </Text>
                <Text style={{fontWeight:'bold'}}>
                    Location: {item.location}
                </Text> */}
            </View>

        </Pressable>
       
       
       )}
       />

</View>
)
  }
  const styles = StyleSheet.create({
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
  })

  export default MoreInfo;

  const imageUrl_image_3 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/5c0ad5d4dbcd1a5a665c056c58fcec3b"
