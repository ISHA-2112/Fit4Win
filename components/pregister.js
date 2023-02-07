import React, {Component, useState} from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions , Image, TextInput, ScrollView, KeyboardAvoidingView, Alert} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { SelectCountry } from 'react-native-element-dropdown';

import { initializeApp } from 'firebase/app';
import { getFirestore, setDoc, doc , addDoc, collection} from 'firebase/firestore';
import firebase from 'firebase/compat/app';
import { get } from 'react-native/Libraries/Utilities/PixelRatio';

const sendData= (NAME,GENDER,BLOOD_GRP,PHONE, DATE)=>{
console.log(DATE.getDate())
  const firebaseConfig = {  
    apiKey: "AIzaSyBKOwym6lkZEUgh7rqpZEWaD9rExHTqr50",
    authDomain: "fit4win-3d2ee.firebaseapp.com",
    projectId: "fit4win-3d2ee",
    storageBucket: "fit4win-3d2ee.appspot.com",
    messagingSenderId: "618217309774",
    appId: "1:618217309774:web:4f58730378e5fe6c9b651f",
    measurementId: "G-CPWT7NBE5V" }  // apiKey, authDomain, etc. (see above)
  
  //initializeApp(firebaseConfig);
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
  const firestore = getFirestore();
  //console.log(NAME);
   addDoc(collection(firestore, "PATIENT"), {
    
    name: NAME,
    gender:GENDER,
    blood_grp:BLOOD_GRP,
    phone:PHONE,
    dob:{
    day: DATE.getDate(),
    month:DATE.getMonth(),
    year: DATE.getFullYear()

  }
  });
}



const gend = [
    {
      value: '1',
      lable: 'Female',
      image: {
        uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
      },
    },
    {
      value: '2',
      lable: 'Male',
      image: {
        uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
      },
    },
    {
        value: '3',
        lable: 'Other',
        image: {
          uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
        },
      }
]

const blood_grp = [
  {
    value: '1',
    lable: 'O +ve',
    
  },
  {
    value: '2',
    lable: 'O -ve',
    
  },
  {
      value: '3',
      lable: 'A +ve',
     
    },
    {
      value: '4',
      lable: 'A -ve',
      
    },
    {
      value: '5',
      lable: 'B +ve',
      
    },
    {
      value: '6',
      lable: 'B -ve',
      
    },
    {
      value: '7',
      lable: 'AB +ve',
      
    },
    {
      value: '8',
      lable: 'AB -ve',
      
    },
]


const { 
	width: SCREEN_WIDTH, 
	height: SCREEN_HEIGHT 
	} = Dimensions.get('window');

    const Pregister=({navigation})=>{
      const [gender, setGender] = useState('');
      const [blood, setBlood]=useState('');

  const [isDatePickeVisible, setDatePickerVisibility]= useState(false);
  const[Date, setDate]=useState('Date')
  const[sendDate, setSendDate]=useState()
  const showDatePicker = () =>
      {
      setDatePickerVisibility(true);
      };
     
  const hideDatePicker = () =>{
      setDatePickerVisibility(false);
      };
  const handleConfirm = (date) =>{
      //console.warn("A date has been picked:",date);
      hideDatePicker();
      //console.log(date.getFullYear())
      //setDate((JSON.stringify(date)).substring(1,11))
      setDate(date.getDate()+'-'+date.getMonth()+'-'+date.getFullYear())
      setSendDate(date)
      //console.log(date)
      //console.log(sendDate)
      };
     
     
  


      var NAME="";
      var GENDER="";
      var BLOOD_GRP="";
      var PHONE;
      let VER_METHOD;
return(
  
<KeyboardAvoidingView  style={{flex:1}} enabled={false}>

<Image style = {style._image_2} source = {{uri: imageUrl_image_2}}></Image>

<Image style = {style._image_3} source = {{uri: imageUrl_image_3}}></Image>

<Image style = {style.logo} source = {{uri: imageurl_logo}}></Image> 

  
<View style={ {flexDirection:'row', top:SCREEN_HEIGHT*0.37}}>

  <Text style={[style.labels]}>
    First name:
  </Text>

  <TextInput autoCapitalize ='words'  style={[style.entry, {top:40}]}  onChangeText={(text) => {window.NAME=text
  //console.log(NAME)
}} 
  />
</View>


<View  style={{flexDirection:'row', top:SCREEN_HEIGHT*0.52}}>

  <Text  style={[style.labels,]}>
    Date of Birth:
  </Text>
  <TouchableOpacity  onPress ={showDatePicker }>
  <TextInput style={{borderBottomColor:'#333333',
            borderBottomWidth: 1,
			width:120, left:SCREEN_WIDTH*6/12,}}
			onTouchStart={showDatePicker}
			placeholder='date'
			showSoftInputOnFocus={false}
			value={Date}
			
			//editable={false}
			/>
	  </TouchableOpacity>
	
	  <DateTimePickerModal
	  isVisible = {isDatePickeVisible}
	  mode="Date"
	  onConfirm = {handleConfirm}
	  onCancel = {hideDatePicker } />
   

</View>
           
<View style={{flexDirection:'row',top:SCREEN_HEIGHT*0.57}}>

  <Text  style={[style.labels]}>
    Gender:
  </Text> 

  <SelectCountry
        style={[style.dropdown]}
        selectedTextStyle={style.selectedTextStyle}
        placeholderStyle={style.placeholderStyle}
        imageStyle={style.imageStyle}
        iconStyle={style.iconStyle}
        maxHeight={200}
        value={gender}
        data={gend}
        valueField="value"
        labelField="lable"
        imageField="image"
        //placeholder="Select country"
        //searchPlaceholder="Search..."
        
        onChange={e => {
          setGender(e.value);
          window.GENDER=e.lable;
          //console.log(GENDER)
        }}
  />
</View>


<View style={{flexDirection:'row',top:SCREEN_HEIGHT*0.57}}>

  <Text style={[style.labels]}>Blood group:</Text>
  <SelectCountry
        style={[style.dropdown]}
        selectedTextStyle={style.selectedTextStyle}
        placeholderStyle={style.placeholderStyle}
        maxHeight={250}
        value={blood}
        data={blood_grp}
        valueField="value"
        labelField="lable"
    
        onChange={e => {
          setBlood(e.value);
          window.BLOOD_GRP=e.lable;
          //console.log(BLOOD_GRP)
        }}
        />
   
</View>


<View style={{flexDirection:'row',top:SCREEN_HEIGHT*0.56}}>
  <Text style={[style.labels]}>Phone number:</Text>
  <TextInput keyboardType='numeric' style={[style.entry, {top:30}]}  onChangeText={(text) => {window.PHONE=text}} />
</View>

{/* <View style={{flexDirection:'row',top:SCREEN_HEIGHT*0.64,left: SCREEN_WIDTH*0.09}}>
  <RadioGroup 
            radioButtons={radioButtons} 
            onPress={onPressRadioButton} 
            
            layout='row'
	/>
</View> */}
  
<View style={{flexDirection:'row',top:SCREEN_HEIGHT*0.66,left:SCREEN_WIDTH/4.92}}>

<TouchableOpacity style={style._Rectangle_1} onPress={()=>{
  console.log(NAME)
if((window.PHONE.length)!==10){
Alert.alert('Enter a valid phone number!')
}
else{
  
  var PHONENO=window.PHONE;
  //console.log(PHONENO)
  navigation.navigate('Home',{PHONENO:PHONENO}) 
}
//console.log(sendDate)
  sendData(window.NAME,window.GENDER,window.BLOOD_GRP,window.PHONE, sendDate)
}
}
>
  <Text style={{color: 'white', fontWeight:'bold', fontSize:SCREEN_WIDTH*17/360, position:"relative",top:1.5*SCREEN_HEIGHT/640, left:SCREEN_WIDTH*45/360 }}>
						Next
					</Text>
  </TouchableOpacity>
</View>
        </KeyboardAvoidingView>
            


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
            fontSize:SCREEN_HEIGHT*0.02,
            left: SCREEN_WIDTH*0.09,
            fontWeight:'700'
    
        },
        entry:{
            position:'absolute',
            borderBottomColor:'#333333',
            borderBottomWidth: 1,
            width:'75%',
            fontSize:SCREEN_HEIGHT*0.02,
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
    
    export default Pregister;