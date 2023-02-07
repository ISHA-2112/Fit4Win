import React, {Component, useState} from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions , Image, TextInput, ScrollView, KeyboardAvoidingView, Alert} from 'react-native';
//import { Font } from 'expo'

import { initializeApp } from 'firebase/app';
import { getFirestore, setDoc, doc , addDoc, collection} from 'firebase/firestore';


const sendData= (NAME_DOC,PHONE,SPECIAL,DEGREE,LOCATION)=>{

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
   addDoc(collection(firestore, "DOCTOR"), {
    
    name: NAME_DOC,
    speciality:SPECIAL,
    degree:DEGREE,
    location:LOCATION,
    phone:PHONE,
  });
}





const { 
	width: SCREEN_WIDTH, 
	height: SCREEN_HEIGHT 
	} = Dimensions.get('window');

    const Dregister=({navigation})=>{
      const [gender, setGender] = useState('');
      const [blood, setBlood]=useState('');


     
      var NAME_DOC="";
      var SPECIAL="";
      var DEGREE="";
      var LOCATION="";
      var PHONE;



return(
  
<View  style={{flex:1, maxHeight:SCREEN_HEIGHT, height:'auto'}} >

<Image style = {style._image_2} source = {{uri: imageUrl_image_2}}></Image>

<Image style = {style._image_3} source = {{uri: imageUrl_image_3}}></Image>

<Image style = {style.logo} source = {{uri: imageurl_logo}}></Image> 

<ScrollView contentContainerStyle={{flexGrow: 1}}>

  
  <View style={ {flexDirection:'row', top:SCREEN_HEIGHT*0.37}}>

  <Text style={[style.labels]}>
    First name:
  </Text>

  <TextInput autoCapitalize ='words'  style={[style.entry, {top:35}]}  onChangeText={(text) => {window.NAME_DOC=text
  //console.log(NAME)
}} 
  />
 
</View>



<View style={{flexDirection:'row',top:SCREEN_HEIGHT*0.48}}>
  <Text style={[style.labels]}>Phone number:</Text>
  <TextInput keyboardType='numeric' style={[style.entry, {top:35}]}  onChangeText={(text) => {window.PHONE=text}} />
</View>

<View style={{flexDirection:'row',top:SCREEN_HEIGHT*0.59}}>
  <Text style={[style.labels]}>Specialization:</Text>
  <TextInput  style={[style.entry, {top:35}]}  onChangeText={(text) => {window.SPECIAL=text}} />
</View>

<View style={{flexDirection:'row',top:SCREEN_HEIGHT*0.7}}>
  <Text style={[style.labels]}>Degree:</Text>
  <TextInput  style={[style.entry, {top:35}]}  onChangeText={(text) => {window.DEGREE=text}} />
</View>


<View style={{flexDirection:'row',top:SCREEN_HEIGHT*0.81}}>
  <Text style={[style.labels]}>Hospital/Clinic Location:</Text>
  <TextInput  style={[style.entry, {top:35}]}  onChangeText={(text) => {window.LOCATION=text}} />
</View>

{/* <View style={{flexDirection:'row',top:SCREEN_HEIGHT*0.92}}>
  <Text style={[style.labels]}>Password:</Text>
  <TextInput secureTextEntry={true}  style={[style.entry, {top:35,width:'60%'}]}  onChangeText={(text) => {window.PHONE=text}} />
</View>

<View style={{flexDirection:'row',top:SCREEN_HEIGHT*1.03}}>
  <Text style={[style.labels]}>Confirm Password:</Text>
  <TextInput secureTextEntry={true} style={[style.entry, {top:35,width:'60%'}]}  onChangeText={(text) => {window.PHONE=text}} />
</View>
   */}
<View style={{flexDirection:'row',top:SCREEN_HEIGHT*0.92,left:SCREEN_WIDTH/4.92}}>

<TouchableOpacity style={style._Rectangle_1} onPress={()=>{
if((window.PHONE.length)!==10){
Alert.alert('Enter a valid phone number!')
}
else{
  
  var PHONENO=window.PHONE;
  //console.log(PHONENO)
  navigation.navigate('Home',{PHONENO:PHONENO}) 
}
  sendData(window.NAME_DOC,window.PHONE, window.SPECIAL, window.DEGREE, window.LOCATION)
}
}
>
  <Text style={{color: 'white', fontWeight:'bold', fontSize:SCREEN_WIDTH*17/360, position:"relative",top:1.5*SCREEN_HEIGHT/640, left:SCREEN_WIDTH*45/360 }}>
						Next
					</Text>
  </TouchableOpacity>
</View>
</ScrollView>
        </View>
            


        )
    }
    
    const style= StyleSheet.create({
        
        _image_2: {
            position: "absolute",
            width: '100%',
            height: SCREEN_WIDTH,
            borderRadius: 0,
            opacity: 1,
            left: SCREEN_WIDTH*0.7,
            //right: "auto",
            top: SCREEN_HEIGHT*0.87,
            //bottom: "auto",
            transform: [
                {translateX: 0},
                {translateY: 0},
                {rotate: '45deg'},
            ],
            backgroundColor: "rgba(0,0,0,0)",
        },
        _image_3: {
            position: "absolute",
            width: '100%',
        height: '100%',
            borderRadius: 0,
            opacity: 1,
            //left: 427.7218017578125,
        right: SCREEN_WIDTH*0.28,
          //top: -SCREEN_HEIGHT*0.55,
            bottom: SCREEN_HEIGHT*0.55,
            transform: [
                {translateX: 0},
                {translateY: 0},
                {rotate: "55deg"},
            ],
            backgroundColor: "rgba(0,0,0,0)",
        },
      logo:{
            position: "absolute",
            width: SCREEN_WIDTH*0.3,
            height:SCREEN_HEIGHT*0.12,
            borderRadius: 0,
            opacity: 1,
            left:SCREEN_WIDTH*0.3,
            right: "auto",
            top: SCREEN_HEIGHT*0.22,
            bottom: "auto",
            transform: [
                {translateX: 0},
                {translateY: 0},
                {rotate: "0deg"},
            ],
            backgroundColor: "rgba(0,0,0,0)",
        },
        _Rectangle_1: {
            position: "absolute",
            width: SCREEN_WIDTH*2/5,
            height: SCREEN_HEIGHT*35/640,
            borderRadius: 40,
            opacity: 1,
            left: 0,
            right: "auto",
            top: 0,
            bottom: "auto",
            // transform: [
            //     {translateX: SCREEN_WIDTH/4.92},
            //     {translateY: SCREEN_HEIGHT*0.93},
            //     {rotate: "0deg"},
            // ],
            backgroundColor: "rgba(203, 0, 0, 1)",
        },
        reg:
        {
            color:'#CB0000',
            fontSize: SCREEN_HEIGHT*0.03,
            position:'absolute',
            top:SCREEN_HEIGHT*0.2,
            left: SCREEN_WIDTH*0.09,
            fontWeight:'700',
           // fontFamily:'mont'
    
        },
    
        labels:{
            position:'absolute',
            color:'#333333',
           // fontFamily:'mont',
            fontSize:SCREEN_HEIGHT*0.018,
            left: SCREEN_WIDTH*0.09,
            fontWeight:'700'
    
        },
        entry:{
            position:'absolute',
            borderBottomColor:'#333333',
            borderBottomWidth: 1,
            width:'75%',
            fontSize:SCREEN_HEIGHT*0.018,
            left: SCREEN_WIDTH*0.09,
        },
        dropdown: {
          
          top:-15,
          left:SCREEN_WIDTH*5/12,
            margin: 16,
            height: 40,
            width: 150,
            backgroundColor: '#EEEEEE',
            borderRadius: 22,
            paddingHorizontal: 8,
          },
          imageStyle: {
            width: 24,
            height: 24,
            borderRadius: 12,
          },
          placeholderStyle: {
            fontSize: 16,
          },
          selectedTextStyle: {
            fontSize: 16,
            marginLeft: 8,
          },
          iconStyle: {
            width: 20,
            height: 20,
          },
    },
    );
    
    const imageurl_logo="https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/9030434ce2a74a7955c24f13c15d46c4"
    const imageUrl_image_3 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/e9034cbadba383a399b5def3dc9945c3"
    const imageUrl_image_2 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/63403b6fa74bdea950d9fc44234856db"
    
    export default Dregister;