import React, {useState,useEffect} from 'react';
import { Text,Image, View, TextInput,StyleSheet,Pressable,FlatList,Dimensions, Button,TouchableOpacity, Alert } from 'react-native';
import { firebase } from './config1';
// import StarRating from 'react-native-star-rating';
import {Component} from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, setDoc, doc , addDoc, collection} from 'firebase/firestore';
import  Icon  from 'react-native-vector-icons/Ionicons';


const addMember=(pid, id, relation)=>{
    console.log(pid)
    console.log(id)
    const relRef =firebase.firestore().collection('PATIENT').doc(pid)
    relRef.update({
        family:{
            relation:id
        }
    })
}
const sendData= (id,pid)=>{

    const firebaseConfig = {  
      apiKey: "AIzaSyBKOwym6lkZEUgh7rqpZEWaD9rExHTqr50",
      authDomain: "fit4win-3d2ee.firebaseapp.com",
      projectId: "fit4win-3d2ee",
      storageBucket: "fit4win-3d2ee.appspot.com",
      messagingSenderId: "618217309774",
      appId: "1:618217309774:web:4f58730378e5fe6c9b651f",
      measurementId: "G-CPWT7NBE5V" }  // apiKey, authDomain, etc. (see above)
    
    initializeApp(firebaseConfig);
    
    const firestore = getFirestore();
    //console.log(NAME);
     addDoc(collection(firestore, "DOC_PAT"), {
      
      doc:id,
      pat:pid
    });
  }

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT
  } = Dimensions.get('window');

const AddFam=({route, navigation})=>{
    const{id}=route.params
    const {pid}=route.params
    console.log(pid)
    //console.log(pid)
    const [doc, setDoc]=useState([]);
    const [relation, setRelation]=useState('')
    const docRef=firebase.firestore().collection('PATIENT');
    const users=[]
    useEffect(()=>{

        docRef
        .onSnapshot(
            querySnapshot=>{
               
                querySnapshot.forEach((doc) => {
                    const {blood_grp, gender, name, phone}=doc.data()
                    if(id==doc.id){
                    users.push({
                        id:doc.id,
                        blood_grp, gender, name, phone
                    })
                }
                   

                })
                setDoc(users)
                //console.log(users)
                
               

            }
        )
    },[])

    

    return(
           
    <View style={{flex:1, backgroundColor:'white'}}>

    <Image style={[styles._image_2, styles._image_2_3]} source={{ uri: imageUrl_image_3 }}></Image>
            <Icon size={76} name="person" color="white" style={styles.iconStyle} />
            <Text style={{top:120,left:80, fontSize:20, color:'white'}}>
                INFORMATION
            </Text>
            
          
        <View style={{flexDirection:'column',marginTop:140,flex:1 }}>

    <FlatList
    style={{height:'100%'}}
    data={doc}
    numColumns={1}
    
    
    renderItem={({item})=>(
        
        <View style={{flexDirection:'column', flex:1}} >
            
                <Text style={styles.itemHeading}>
                {'\n'} {item.name}
                </Text>
            <View style={[styles.itemNext,{flexDirection:'column',top:20, marginLeft:SCREEN_WIDTH*0.15, height:'100%'}]} >
                
         <Text style={styles.itemNext}>
            Phone number: {item.phone}
         </Text>
                <Text style={styles.itemNext}>
                   {'\n'}Blood Group: {item.blood_grp}
                </Text>
                <Text style={styles.itemNext}>
                    {'\n'}Gender: {item.gender}
                </Text>
            <Text style={[styles.itemNext,{fontWeight:'bold'}]}>{'\n'}Add as my:</Text>
               <Text>{'\n'}</Text>
            <TextInput style={[styles.entry,{top:220}]} onChangeText={(text)=>setRelation(text)}/>
            <Text>{'\n'}</Text>
            <TouchableOpacity style={styles._Rectangle_1} onPressIn={()=>{addMember(pid,item.id, relation)
            Alert.alert('Added as family')}}>
                <Text style={{color: 'white', fontWeight:'bold', fontSize:SCREEN_HEIGHT*20/759, position:"relative",top:7, left:SCREEN_WIDTH*0.1 }}>
                    Add member
                </Text>

            </TouchableOpacity>
            <Text>{'\n'}</Text>
            </View>
        </View>
       
       
       )}
       />

  
       </View>
       
       
</View>
    
)

}

const styles = StyleSheet.create({
    _Rectangle_1: {
		position: "absolute",
		width: 290,
		height: 50,
		borderRadius: 40,
		opacity: 1,
		left: 0,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 280},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(203, 0, 0, 1)",
	},
    _Rect_2: {
		position: "absolute",
		width: 290,
		height: 50,
		borderRadius: 40,
		opacity: 1,
		borderWidth: 2,
		borderColor: "rgba(203, 0, 0, 1)",
		left: 0,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 280},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(203, 0, 0, 0)",
	},
    _Rectangle_2: {
		position: "absolute",
		width: SCREEN_WIDTH*0.5,
		height: SCREEN_HEIGHT*0.08,
		borderRadius: 40,
		opacity: 1,
		borderWidth: 2,
		borderColor: "rgba(203, 0, 0, 1)",
		left: 0,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: SCREEN_WIDTH*0.45},
			{translateY: SCREEN_HEIGHT*0.07},
			{rotate: "0deg"},
		],
		backgroundColor: "white",
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
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize:21,
        //marginRight:22, 
        top:0,
        left:SCREEN_WIDTH*0.26
    },
    itemNext:{
        fontSize:15,
        
    },
    _image_1: {
        position: "relative",
        padding:'15%',
            width: SCREEN_WIDTH*0.32,
            height: SCREEN_WIDTH*0.32,
        borderRadius: 0,
        opacity: 1,
        left: SCREEN_WIDTH * 0.03,
        right: "auto",
        top: 0,
        bottom: "auto",
        transform: [
          { translateX: 0 },
          { translateY: 0 },
          { rotate: "0deg" },
        ],
        backgroundColor: "rgba(0,0,0,0)",
      },
      _image_2_3:{
        position:'absolute',
        width:'100%',
        height:'40%',
    
    
      },
      _image_2:{
        bottom:SCREEN_HEIGHT*0.7,
      },
      _image_3:{
        top:SCREEN_HEIGHT*0.93,
      },
      iconStyle:{

        top:70,
        left:20
      },
      entry:{
        position:'absolute',
        borderBottomColor:'#333333',
        borderBottomWidth: 1,
        width:'75%',
        fontSize:SCREEN_HEIGHT*0.02,
        left: 0,
    },
});
    
const imageUrl_image_3 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/5c0ad5d4dbcd1a5a665c056c58fcec3b"
const imageUrl_image_6 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/87efc7bfcffc31fec0845dbedc9fe3ad"
const imageUrl_image_2 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/834df87c4562e0ddfe7154e4b2999d1d"


export default AddFam;