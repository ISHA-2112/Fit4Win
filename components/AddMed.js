import React, { useState} from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions , Image, TextInput, ScrollView, KeyboardAvoidingView, Alert, ImageBackground} from 'react-native';
//import { Font } from 'expo'

import { initializeApp } from 'firebase/app';
import { getFirestore, setDoc, doc , addDoc, collection} from 'firebase/firestore';

const addData =(pid, DESC, CAUSE)=>{
    
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
  addDoc(collection(firestore, "MEDICATION"), {
    patid:pid,
    title: DESC,
    cause:CAUSE,

  })

}

const { 
	width: SCREEN_WIDTH, 
	height: SCREEN_HEIGHT 
	} = Dimensions.get('window');

const AddMed=({route, navigation})=>{
    var CAUSE;
    var DESC;
    const {pid}=route.params;
   // console.log(pid)
    return(

        <View>
            <ImageBackground source = {{uri: imageUrl_image_2}} resizeMode="cover" style={styles.bg_image}>
            <View style={styles.myAllergies}>
           

                <Text style={styles.heading}>
                    ADD MEDICATION
                </Text>
                
            <View style={{top:20}}>

            <Text style={styles.label}>
                Medicine Name:
            </Text>
            <TextInput style={[styles.entry, {top:60}] } onChangeText={(text) => window.DESC=text}/>
            </View>
            <View style={{top:-70}}>

            <Text style={styles.label}>
                Illness name:
            </Text>
            <TextInput style={[styles.entry,{top:60}]} onChangeText={(text) =>window.CAUSE=text}/>
            </View>
            <TouchableOpacity style={styles._Rectangle_1} onPress={()=>{ addData(pid,window.DESC,window.CAUSE)
            navigation.navigate('Medications',{pid:pid})}}>
                <Text style={{color: 'white', fontWeight:'bold', fontSize:SCREEN_HEIGHT*20/759, position:"relative",top:5, left:35}}>
                    Add Medicine
                </Text>
            </TouchableOpacity>
            </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({

    bg_image:{
        width:'100%',
        height:'100%',
    },
    myAllergies:{
        backgroundColor:'white',
        flex:0.85,
        //justifyContent:'space-evenly',
        
        justifyContent:'space-around',
        top:50
        
    },
    label:{
        marginLeft:20,
    },
    entry:{
        position:'absolute',
        borderBottomColor:'#333333',
        borderBottomWidth: 1,
        width:'75%',
        fontSize:SCREEN_HEIGHT*0.018,
        left: SCREEN_WIDTH*0.09,

    },
    heading:  {
        color:'#CB0000',
        fontSize: SCREEN_WIDTH*0.053,
        position:'absolute',
        top:SCREEN_HEIGHT*0.06,
        left: SCREEN_WIDTH*0.09,
        fontWeight:'700',
        //fontFamily:'mont'
        marginLeft:SCREEN_WIDTH*0.17

    },
    head:{
        alignItems:'center',
        flex:0.00000000001
    },
    _Rectangle_1: {
		position: "absolute",
		width: SCREEN_WIDTH*0.6,
		height: SCREEN_HEIGHT*0.06,
		borderRadius: 40,
		opacity: 1,
		left: 0,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: SCREEN_WIDTH*0.2},
			{translateY: SCREEN_HEIGHT*0.7},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(203, 0, 0, 1)",
	},
})
export default AddMed;
const imageUrl_image_2 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/63403b6fa74bdea950d9fc44234856db"
