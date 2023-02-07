import React, {useState,useEffect} from 'react';
import { Text, View, TextInput,StyleSheet,Pressable,FlatList, Button } from 'react-native';

import { initializeApp } from 'firebase/app';
import { getFirestore, setDoc, doc , addDoc, collection} from 'firebase/firestore';

const Send= ()=>{

const sendData= ()=>{

    const firebaseConfig = {  
    apiKey: "AIzaSyDIv3LFPIUgdErk8MIIaGmCBWu14PQY2tI",
    authDomain: "test-b29b2.firebaseapp.com",
    projectId: "test-b29b2",
    storageBucket: "test-b29b2.appspot.com",
    messagingSenderId: "350912733602",
    appId: "1:350912733602:web:8a662488d884f2db5352fb",
    measurementId: "G-SE80W94ZTK" }  // apiKey, authDomain, etc. (see above)
    
    initializeApp(firebaseConfig);
    
    const firestore = getFirestore();
    
     addDoc(collection(firestore, "characters"), {
      employment: "plumber",
      outfitColor: "red",
      specialAttack: "fireball"
    });
}
return(

    <View style={{top:200}}>
        <Button title='Send'  onPress={sendData}></Button>
    </View>
);
}

export default Send;