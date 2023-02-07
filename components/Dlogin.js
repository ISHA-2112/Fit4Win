import React, {Component, useState, useEffect} from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions , Image, TextInput} from 'react-native';
//import { Font } from 'expo'
import { useFonts } from 'expo-font';
import HomePage from './HomePage';
import { firebase } from './config1';


const { 
	width: SCREEN_WIDTH, 
	height: SCREEN_HEIGHT 
	} = Dimensions.get('window');


const Dlogin=({navigation})=>{
	const [ver,setVer]=useState();
const doc=firebase.firestore().collection('DOCTOR')
var doctor=[]
 useEffect(()=>{
doc.onSnapshot(
	querySnapshot=>{

		querySnapshot.forEach((doc)=>{
			const { name, phone,speciality, degree,location }=doc.data()
			doctor.push(
				{
					id:doc.id, name, phone,speciality, degree,location
					
				}
			)
			//console.log('------------------')
			
		})
		setVer(doctor)
		//console.log(patient)
		
	}
)
},[])
//     let [fontsLoaded] = useFonts({
//         'mont': require('../assets/fonts/Montserrat_700Bold.ttf'),
//         'poppins':require('../assets/fonts/Poppins_400Regular.ttf'),
//       });
    var NAME_LOG="";
	var PH_EMAIL="";
    
    return(

    <View style={{flex:1}}>
        <Image style = {style._image_2} source = {{uri: imageUrl_image_2}}>
			</Image>
	    <Image style = {style._image_3} source = {{uri: imageUrl_image_3}}>
			</Image>
        <Image style = {style.logo} source = {{uri: imageurl_logo}}>
            </Image> 
            <TouchableOpacity style={style._Rectangle_1} onPress={()=>{//console.log(window.NAME_LOG)
			//console.log(window.PH_EMAIL)
			let flag=0
			let pos
			for (let i=0;i<ver.length;i++){

				if (ver[i]['name']==window.NAME_LOG && ver[i]['phone']==window.PH_EMAIL){
					pos=i
					//console.log('1')
					flag=1
					break
				}
			}
//console.log(ver[pos]['id'])
			if(flag==1)
			navigation.navigate('Plist', {did:ver[pos]['id']})
			else 
			Alert.alert('Number is not registered please register first')
		}} >
        <Text style={{color: 'white', fontWeight:'bold', fontSize:SCREEN_HEIGHT*20/759, position:"relative",top:9, left:SCREEN_WIDTH/4.3 }}>
					Login
					</Text>
			</TouchableOpacity>

        <Text style={style.login}>
        Doctor's Login
        </Text>
        <Text style={[style.labels, {top:SCREEN_HEIGHT*0.51}]}>
            First name
        </Text>
        <Text  style={[style.labels, {top:SCREEN_HEIGHT*0.64}]}>
        Phone no.
        </Text>
        
        <TextInput autoCapitalize ='words'  style={[{top:SCREEN_HEIGHT*0.56}, style.entry]}  onChangeText={(text) => window.NAME_LOG=text} />
        <TextInput keyboardType='numeric'  style={[{top:SCREEN_HEIGHT*0.69}, style.entry]}  onChangeText={(text) => window.PH_EMAIL=text} />
        
        <Text style={[style.labels, {top:SCREEN_HEIGHT*0.9, fontSize:SCREEN_HEIGHT*0.02}]}>Not registered yet? </Text>
        <TouchableOpacity onPressOut={()=>navigation.navigate('Dregister')}>
            <Text style={style.click_here}>
                Click here
            </Text>
        </TouchableOpacity>
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
    height: SCREEN_WIDTH*1.5,
		borderRadius: 0,
		opacity: 1,
		//left: 427.7218017578125,
    right: SCREEN_WIDTH*0.28,
	  top: -SCREEN_HEIGHT*0.55,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "55deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
  logo:{
		position: "absolute",
		width: SCREEN_WIDTH*0.5,
		height:SCREEN_HEIGHT*0.2,
		borderRadius: 0,
		opacity: 1,
		left:SCREEN_WIDTH*0.19,
		right: "auto",
		top: SCREEN_HEIGHT*0.19,
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
		width: SCREEN_WIDTH*3/5,
		height: 53,
		borderRadius: 40,
		opacity: 1,
		left: 0,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: SCREEN_WIDTH/4.93},
			{translateY: SCREEN_HEIGHT*7/9},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(203, 0, 0, 1)",
	},
    login:
    {
        color:'#CB0000',
        fontSize: SCREEN_WIDTH*0.053,
        position:'absolute',
        top:SCREEN_HEIGHT*0.4,
        left: SCREEN_WIDTH*0.09,
        fontWeight:'700',
        //fontFamily:'mont'

    },

    labels:{
        position:'absolute',
        color:'#333333',
        // fontFamily:'poppins',
        fontSize:SCREEN_HEIGHT*0.025,
        left: SCREEN_WIDTH*0.09,
        fontWeight:'700'

    },
    entry:{
        position:'absolute',
        borderBottomColor:'#333333',
        borderBottomWidth: 1,
        width:'60%',
        fontSize:SCREEN_HEIGHT*0.02,
        left: SCREEN_WIDTH*0.09,
    },
    click_here:{

		position:"absolute",
		left:SCREEN_WIDTH*0.6,
		top: SCREEN_HEIGHT*0.905,
		//backgroundColor:'white',
		color:'rgba(203, 0, 0, 1)',
		fontSize: SCREEN_WIDTH*0.032,
		fontFamily: "serif",
		fontWeight: '700',
		textDecorationLine: 'underline'
	},
},
);

const imageurl_logo="https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/9030434ce2a74a7955c24f13c15d46c4"
const imageUrl_image_3 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/e9034cbadba383a399b5def3dc9945c3"
const imageUrl_image_2 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/63403b6fa74bdea950d9fc44234856db"

export default Dlogin;