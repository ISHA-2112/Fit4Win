import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert , Dimensions, Image} from 'react-native'
import React, { useRef, useState } from 'react'
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import { firebaseConfig } from './config'
import firebase from 'firebase/compat/app';

const { 
	width: SCREEN_WIDTH, 
	height: SCREEN_HEIGHT 
	} = Dimensions.get('window');

const Home = ({route, navigation}) => {
  //console.log(SCREEN_HEIGHT)
  const {PHONENO}= route.params;
    const [phoneNumber, setPhoneNumber] = useState(JSON.stringify(PHONENO));
    // const phoneNumber="233";
    const [code, setCode] = useState('');
    const [verificationId, setVerificationId] = useState(null);
    const recaptchaVerifier = useRef(null);
   const phone="+91"+eval(phoneNumber);
  //  console.log((phone));
  //  console.log(eval(phoneNumber));
    const sendVerification = () => {
        const phoneProvider = new firebase.auth.PhoneAuthProvider();
        //console.log('1')
        phoneProvider
          .verifyPhoneNumber(phone, recaptchaVerifier.current)
          .then(setVerificationId);
          //setPhoneNumber('');
          //console.log('2');
    };

    const confirmCode = () => {
        const credential = firebase.auth.PhoneAuthProvider.credential(
          verificationId,
          code
        );
        firebase
          .auth()
          .signInWithCredential(credential)
          .then(() => {
            setCode('');
        })
        .catch((error) => {
          // show an alert in case of error
          alert(error);
        })
        Alert.alert(
          'Registration Successful. Please Login to continue.',
        );
        navigation.navigate('Plogin')
       
    };

    return (
        <View style={styles.container}>

          
<Image style = {styles._image_2} source = {{uri: imageUrl_image_2}}></Image>

<Image style = {styles._image_3} source = {{uri: imageUrl_image_3}}></Image>



  
            <FirebaseRecaptchaVerifierModal
                ref={recaptchaVerifier}
                firebaseConfig={firebaseConfig}
            />
            <Text style={[styles.otpText,{top:SCREEN_HEIGHT*50/811}]}>
              Verification using OTP
            </Text>
            {/* <TextInput
                placeholder="Phone Number"
                onChangeText={setPhoneNumber}
                keyboardType="phone-pad"
                autoCompleteType="tel"
                style={styles.textInput}
            /> */}
            <TouchableOpacity
                style={[styles.sendVerification,{top:SCREEN_HEIGHT*60/811}]}
                onPress={sendVerification}
            >
                <Text style={styles.buttonText}>Send OTP</Text>
            </TouchableOpacity>
            <TextInput
                placeholder="Enter OTP"
                onChangeText={setCode}
                keyboardType="number-pad"
                style={[styles.textInput,{top:SCREEN_HEIGHT*70/811}]}
            />
            <TouchableOpacity style={[styles.sendCode,{top:SCREEN_HEIGHT*80/811}]} onPress={confirmCode}>
                <Text style={styles.buttonText}>Verify</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home

const styles= StyleSheet.create({
        
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
  otpText:{
      fontSize:24,
      fontWeight:'500',
      color:'#000',
      margin:20
    },
    sendCode: {
      padding: 20,
      backgroundColor: "rgba(203, 0, 0, 1)",
      borderRadius: 10,
    },
    buttonText: {
      textAlign: 'center',
      color: '#ffffff',
      fontWeight:'bold'
    },
    textInput: {
      paddingTop: 40,
      paddingBottom: 20,
      paddingHorizontal: 20,
      fontSize: 24,
      borderBottomColor: '#333333',
      borderBottomWidth: 2,
      marginBottom: 20,
      textAlign: 'center',
      color:'#000'
    },
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    sendVerification: {
      padding: 20,
      backgroundColor: 'rgba(203, 0, 0, 1)',
      borderRadius: 10,
    },
});

 
const imageurl_logo="https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/9030434ce2a74a7955c24f13c15d46c4"
const imageUrl_image_3 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/e9034cbadba383a399b5def3dc9945c3"
const imageUrl_image_2 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/63403b6fa74bdea950d9fc44234856db"
