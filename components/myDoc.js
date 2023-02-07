import React, {useState,useEffect, useRef, useLayoutEffect} from 'react';
import { Text,Image, View, TextInput,StyleSheet,Pressable,FlatList,Dimensions, Button,TouchableOpacity } from 'react-native';
import { firebase } from './config1';
// import StarRating from 'react-native-star-rating';
import {Component} from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, setDoc, doc , addDoc, collection} from 'firebase/firestore';

const MyDoc=({route, navigation})=>{
    const {pid}=route.params;

    const dpRef=firebase.firestore().collection('DOCTOR');
    //const docRef=firebase.firestore().collection('DOCTOR');

    const [docpat,setDocPat]=useState();
    const [doct,setDoct]=useState();
    var doctor=[]
    var temp=[]
    //console.log('0')
    const dp=[]
useEffect(()=>{
//console.log('1')

        dpRef
        .onSnapshot(
            querySnapshot=>{
                querySnapshot.forEach((document) =>{
                    const{name, phone,speciality, degree,location} =document.data()
                    

                        dp.push({
                            id:document.id,
                            name, phone,speciality, degree,location
                        })
                    
                    
                    //console.log(dp)
                })
                
            //console.log('-------------')
                setDocPat(dp)
                //window.temp=dp
                //console.log(docpat)
               
            
            }
        )
        
        //console.log(d)      
        //console.log(doct)
        
    },[])
    // console.log(window.temp)
    // let d=window.temp.length
    // for (let i=0;i<d;i++){
  
    // const addDocRef=firebase.firestore().collection('DOCTOR').doc(window.temp[i]['doc']) 
    // .onSnapshot(documentSnapshot => {
    //     doctor.push(documentSnapshot.data())
    //     setDoct(doctor)
    // //   console.log(doctor)
    //  // console.log(doct)
    
        
    // })
    // }



return(
    <View style={{flex:1, marginTop:100}}>

    <FlatList
    style={{height:'100%'}}
    data={docpat}
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
});
    

export default MyDoc;