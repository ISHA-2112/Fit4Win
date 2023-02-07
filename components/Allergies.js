import React , {useState, useEffect} from 'react';
import {Button, Text, View, TouchableOpacity,FlatList,Pressable, StyleSheet, Dimensions, Image, AppRegistry, SafeAreaView,ImageBackground, Alert } from 'react-native';
import {Entypo, Ionicons, FontAwesome5} from '@expo/vector-icons';
import {useFonts} from 'expo-font';
//import Dialog from 'react-native-dialog';
import { firebase } from './config1';

//import PromptExample from './dialog';


const { 
	width: SCREEN_WIDTH, 
	height: SCREEN_HEIGHT 
	} = Dimensions.get('window');

const Allergies = ({route,navigation}) => {
  const {pid}=route.params;
 // var pid='345'
// console.log('hi')
 const [aller,setAller]=useState();
 const allRef=firebase.firestore().collection('ALLERGY')
var allergy=[]
useEffect(()=>{
  //console.log('meow')
allRef.onSnapshot(
	querySnapshot=>{

		querySnapshot.forEach((doc)=>{
			const {patid,title, cause}=doc.data()
if(patid==pid){
			allergy.push(
				{
					id:doc.id, title, cause
					
				}
			)
}
			//console.log('------------------')
			
		})
		setAller(allergy)
    //console.log()
    //console.log(aller)
		//console.log(patient)
		
	}
)
},[aller])
//console.log(aller)
  return (
    <View >
         <ImageBackground source = {{uri: imageUrl_image_2}} resizeMode="cover" style={styles.bg_image}>
  <View style={styles.menu}>
  <TouchableOpacity onPressOut={()=>navigation.navigate('HomePage',{id:pid})}>
  <Entypo name="home" size={30} color={'white'}  />
  </TouchableOpacity>
  </View>
   
    <View style={styles.myAllergies}>
  <FlatList
    style={{height:'100%', top:30, flex:1}}
    data={aller}
    numColumns={1}
    
   
    renderItem={({item})=>(
       
        <Pressable>
          <View style={styles.allergy_list}>
            <View style={styles.al_main}>
                <Text style={[styles.allergy_list_contents,{fontWeight:'bold'}]}>Description: {item.title}</Text>
                <TouchableOpacity style={{left:30}} onPress={()=>console.log("wants to edit")}>

                <FontAwesome5 name ="pen" size={30} color={'rgb(245,0,0)'}/>
                </TouchableOpacity>
            </View>
               <Text style={[styles.al_submain,{fontWeight:'bold'}]}>Cause: {item.cause}</Text>
            </View>
            <View>
              <Text>{'\n'}</Text>
            </View>
</Pressable>
 )}
/>
          {/* <View style={styles.allergy_list}>
          <View style={styles.al_main}>
            <Text style={styles.allergy_list_contents}>Pollen Allergy</Text>
          <TouchableOpacity onPress={()=>console.log("wants to edit")}>
          <FontAwesome5 name ="pen" size={30} color={'rgb(245,0,0)'}/>
          </TouchableOpacity>
          </View>
          <Text style={styles.al_submain}>coughing, and itchy eyes</Text>
          </View>

          <View style={styles.allergy_list}>
          <View style={styles.al_main}><Text style={styles.allergy_list_contents}>Pet Allergy</Text>
          <FontAwesome5 name ="pen" size={30} color={'rgb(245,0,0)'}/>
          </View>
          <Text style={styles.al_submain}>Dogs</Text>
          </View>

          <View style={styles.allergy_list}>
          <View style={styles.al_main}><Text style={styles.allergy_list_contents}>Food Allergy</Text>
          <FontAwesome5 name ="pen" size={30} color={'rgb(245,0,0)'}/>
          </View>
          <Text style={styles.al_submain}>Tingling in mouth</Text>
          </View>
            */}
           <TouchableOpacity onPress={()=>navigation.navigate('AddAllergies',{pid:pid})}>
          <Ionicons name="add-circle" size={50} color ={'rgb(245,0,0)'} />
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

    menu:{
        justifyContent:'flex-end',
        flexDirection:'row',
        alignItems: 'center',
        padding: '15%',
        paddingRight: '5%',
        paddingBottom:'2%',
       
    },

    myAllergies:{
        backgroundColor:'white',
        flex:0.95,
        //justifyContent:'space-evenly',
        alignItems:'center',
        justifyContent:'space-around',
        
        
    },

    allergy_list:{
        backgroundColor:'rgb(245,245,245)',
        width:SCREEN_WIDTH*0.8,
        height:'15%',
        borderRadius:20,
        padding:'5%',
        flex:1
        //fontFamily:'Poppins_Bold',
      
        
      
        

    },

    allergy_list_contents:{
        //fontFamily:'Poppins_Bold',
    
        
        

    },
    al_main:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex:1,
        width:200

    },
    
    al_submain:{
       
    },
    dial: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },

})

export default Allergies;
const imageUrl_image_2 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/63403b6fa74bdea950d9fc44234856db"
