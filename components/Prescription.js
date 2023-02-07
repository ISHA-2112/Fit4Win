
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ImageBackground, SafeAreaView, TouchableOpacity , Dimensions,Image} from 'react-native';
import { useState, useEffect } from 'react';
import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';
import { firebase } from './config1';
import { initializeApp } from 'firebase/app';
import { getFirestore, setDoc, doc , addDoc, collection} from 'firebase/firestore';
import { SelectCountry } from 'react-native-element-dropdown';


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

const time=[
  {value:'1',
lable:'Before'},
{
  value:'2',
  lable:'After'
}
]
const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT
} = Dimensions.get('window');

const Prescription=({route})=> {
  const {pid}=route.params
  const {name}=route.params
  const {blood_grp}=route.params
  const {gender}=route.params
  const {phone}=route.params
  
  //console.log(name)
  var d=new Date
  var month=d.getMonth()+1
  //console.log(month)
  //console.log(d.getDate()+"-"+month+'-'+d.getFullYear())
  var DATE=d.getDate()+"-"+month+'-'+d.getFullYear()
  console.log('me')
const [ver,setVer]=useState();
const pat=firebase.firestore().collection('PATIENT')
var patient=[]
useEffect(()=>{
pat.onSnapshot(
	querySnapshot=>{

		querySnapshot.forEach((doc)=>{
			const {blood_grp, gender, name, phone }=doc.data()
            if(pid==doc.id){
			patient.push(
				{
					id:doc.id, blood_grp, gender, name, phone
					
				}
        )}
        //console.log('------------------')
        
      })
      setVer(patient)
      //console.log(patient[0]['name'])
      
    }
    )
  },[])
  
  //console.log(ver)
  let[med1,setmed1] = useState("");
  let[med2,setmed2] = useState("");
  let[temp1,settemp1] = useState("");
  let[spo1,setspo1] = useState("");
  let[heart,setheart] = useState("");
  let[bloodp,setbloodp] = useState("");
  let[m1d1,setm1d1] = useState("");
  let[m1d2,setm1d2] = useState("");
  let[m1d3,setm1d3] = useState("");
  let[m2d1,setm2d1] = useState("");
  let[m2d2,setm2d2] = useState("");
  let[m2d3,setm2d3] = useState("");
  let[sug1,setsug1] = useState("");
  let[sug2,setsug2] = useState("");
  let [suggestion, setSuggestion]=useState("");
  let [precautions, setPrecautions]=useState("");
  let [rectest, setRectest]=useState("");

  console.log('meow')



const html = `
   <html>
   <body>
    <H3 align="center" >Fit4Win Clinic</H3>
    <div><p></p></div>
    <hr>
    <div><p></p></div>
    <pre>Name: ${name}                              Blood Group: ${blood_grp}</pre>
    <pre>Age:                                       Mobile No.: ${phone}</pre>
    <pre>Gender: ${gender}                          Date:</pre>
    <div><p></p></div>
    <hr>
    <diV><p></p></diV>
    <diV><p></p></diV>
    <pre><b>Symtoms/Vital Details:</b></pre>
    <pre>Temp:${temp1}      Spo2:${spo1}       Heart Rate:${heart}     B.P:${bloodp} </pre>
<pre>       <b>Medicines</b></pre>
    <table border="3" align="center" >
        <tr>
            <th>Name</th>
            <th>Morning</th>
            <th>afternoon</th>
            <th>night</th>
           
        </tr>
        <tr>
            <td> ${med1} </td>
            <td> ${m1d1} </td>
            <td> ${m1d2} </td>
            <td> ${m1d3} </td>
           
        </tr>
        <tr>
            <td> ${med2} </td>
            <td> ${m2d1} </td>
            <td> ${m2d2} </td>
            <td> ${m2d3} </td>
          
        </tr>
    
    </table>
    
        <p><b>Suggested Diet:</b></p>
        <p> ${suggestion} </p>
        <hr>
        <p><b>Precautions:</b></p>
        <p> ${precautions}</p>
        <hr>
        <p><b>Next Appointment (Date/Time):</b></p>
        <hr>
        <p><b>Tests to be done before next appointment:</b></p>
        <p> ${rectest}</p>
        <hr>
        <pre>                                                       Doctors stamp/sign :</pre>
</body>     
   </html>
`;



let generatePdf = async () => {
  const file = await printToFileAsync({
    html:html,
    base64:false,
  }
  );
  console.log('1')
  await shareAsync(file.uri);
  console.log(file.uri)
};

  return (
    <View style={styles.container}>
    <Image style={[styles._image_2, styles._image_2_3]} source={{ uri: imageUrl_image_3 }}></Image>
    

    <View style={[styles.main]}>
      
      <Text style={[styles.record,{fontWeight:'bold',textDecorationLine: 'underline'}]}>Records</Text>
      {/* <View>
        <Text style={styles.parameters}>
        <TextInput value={temp1} placeholder ="Temperature" style={styles.spostyle} onChangeText={(value) =>settemp1(value)} /> 
        <TextInput value={spo1} placeholder ="SPO2" style={styles.spostyle} onChangeText={(value) =>setspo1(value)} />
        <TextInput value={heart} placeholder ="Heart rate" style={styles.spostyle} onChangeText={(value) =>setheart(value)} />
        <TextInput value={bloodp} placeholder ="Blood Pressure" style={styles.spostyle} onChangeText={(value) =>setbloodp(value)} />
        </Text>
      </View>  */}
            <View  style={{top:-10}}>
         <View style={styles.temp_input}>
            <Text> Temperature</Text>
         <TextInput value={temp1} placeholder ="Temperature" style={styles.spostyle} onChangeText={(value) =>settemp1(value)} />
         </View>
         <View style={styles.temp_input}>
         <Text> SPO2</Text>
         <TextInput value={spo1} placeholder ="SPO2" style={styles.spostyle} onChangeText={(value) =>setspo1(value)} />
         </View>
         <View style={styles.temp_input}>
         <Text> Heart rate</Text>
         <TextInput value={heart} placeholder ="Heart rate" style={styles.spostyle} onChangeText={(value) =>setheart(value)} />
         </View>
         <View style={styles.temp_input}>
         <Text> Blood Pressure</Text>
         <TextInput value={bloodp} placeholder ="Blood Pressure" style={styles.spostyle} onChangeText={(value) =>setbloodp(value)} />
         </View>
      </View>
      <View style={{borderBottomColor:'#333333', borderWidth:0.5,top:-7}}></View>

      <View>
        <Text style={[styles.record,{top:-15,fontWeight:'bold',textDecorationLine: 'underline'}]}>Prescription</Text>
      </View>

      <View style={[styles.med1,{top:-30}]}>
      <Text style={[styles.parameters]}> Medicine1</Text>
        <TextInput value={med1} placeholder ="Name" style={styles.spostyle} onChangeText={(value) =>setmed1(value)} /> 
      </View>

      <View style={[styles.med1record,{top:-30}]}>
        <View><Text>Morning</Text></View>
        <View><Text>Afternoon</Text></View>
        <View><Text>Night</Text></View>
      </View>

      <View style={[styles.med1record,{top:-30}]} >
         <View>
         <TextInput keyboardType='numeric' value={m1d1} placeholder ="0/1" textAlign='center' onChangeText={(value) =>setm1d1(value)} />
         </View>
         <View>
         <TextInput keyboardType='numeric' value={m1d2} placeholder ="0/1" textAlign='center' onChangeText={(value) =>setm1d2(value)} />
         </View>
         <View>
         <TextInput keyboardType='numeric' value={m1d3} placeholder ="0/1" textAlign='center' onChangeText={(value) =>setm1d3(value)} />
         </View>
      </View>

      <View style={{top:-27}}>
      <SelectCountry
        style={[styles.dropdown]}
        // selectedTextStyle={styles.selectedTextStyle}
        // placeholderStyle={styles.placeholderStyle}
        maxHeight={250}
       placeholder='When'
        data={time}
        valueField="value"
        labelField="lable"
    
      onChange={()=>console.log()}
        />
        {/* <TextInput value={sug1} placeholder ="Should be taken" style={styles.spostyle} onChangeText={(value) =>setsug1(value)} /> */}
      </View>
<View style={{borderBottomColor:'#333333', borderWidth:0.5,top:-20, width:250, left:45}}></View>
      <View style={[styles.med1,{top:-15}]}>
      <Text style={styles.parameters}> Medicine2 </Text>
        <TextInput value={med2} placeholder ="Name" style={styles.spostyle} onChangeText={(value) =>setmed2(value)} />
      </View>

      <View style={[styles.med1record,{top:-15}]}>
        <View><Text>Morning</Text></View>
        <View><Text>Afternoon</Text></View>
        <View><Text>Night</Text></View>
      </View>

      <View style={[styles.med1record, {top:-15}]} >
         <View>
         <TextInput keyboardType='numeric' value={m2d1} placeholder ="0/1" textAlign='center' onChangeText={(value) =>setm2d1(value)} />
         </View>
         <View>
         <TextInput keyboardType='numeric' value={m2d2} placeholder ="0/1" textAlign='center' onChangeText={(value) =>setm2d2(value)} />
         </View>
         <View>
         <TextInput keyboardType='numeric' value={m2d3} placeholder ="0/1" textAlign='center' onChangeText={(value) =>setm2d3(value)} />
         </View>
      </View>

      <View style={{top:20}}>
       
        {/* <TextInput value={sug2} placeholder ="Should be taken" style={styles.spostyle} onChangeText={(value) =>setsug2(value)} /> */}
        <SelectCountry
        style={[styles.dropdown,{top:-30}]}
        // selectedTextStyle={styles.selectedTextStyle}
        // placeholderStyle={styles.placeholderStyle}
        maxHeight={250}
       placeholder='When'
        data={time}
        valueField="value"
        labelField="lable"
    onChange={()=>console.log()}
      
        />
      </View>
      <View style={{borderBottomColor:'#333333', borderWidth:0.5,top:-7,width:250, left:45}}></View>
{/* 
      <View style={[styles.med1,{top:-5}]}>
      <Text style={styles.parameters}> Medicine3</Text>
        <TextInput value={med3} placeholder ="Name" style={styles.spostyle} onChangeText={(value) =>setmed3(value)} /> 
      </View>


      <View style={[styles.med1record, {top:-5}]}>
        <View><Text>Morning</Text></View>
        <View><Text>Afternoon</Text></View>
        <View><Text>Night</Text></View>
      </View>

      <View style={[styles.med1record,{top:-10}]} >
         <View>
         <TextInput value={m3d1} placeholder ="0/1" textAlign='center' onChangeText={(value) =>setm3d1(value)} />
         </View>
         <View>
         <TextInput value={m3d2} placeholder ="0/1" textAlign='center' onChangeText={(value) =>setm3d2(value)} />
         </View>
         <View>
         <TextInput value={m3d3} placeholder ="0/1" textAlign='center' onChangeText={(value) =>setm3d3(value)} />
         </View>
      </View>

      <View style={{top:-8}}>
        
        <TextInput value={sug3} placeholder ="Should be taken" style={styles.spostyle} onChangeText={(value) =>setsug3(value)} />
      </View> */}


      <View>
        <TextInput style={styles.textInput} placeholder='Suggested Diet' onChangeText={(value)=>setSuggestion(value)}/>
        <TextInput style={styles.textInput} placeholder='Precautions' onChangeText={(value)=> setPrecautions(value)}/>
        <TextInput style={styles.textInput}  placeholder='Test to be Done before next appointment' onChangeText={(value)=>setRectest(value)}/>

      </View>
      <View></View>{/* <TextInput value={name} placeholder ="Name" style={styles.textInput} onChangeText={(value) =>setName(value)} /> */}
      <View></View>{/* <TextInput value={med1} placeholder ="med1" style={styles.textInput2} onChangeText={(value) =>setMed1(value)} /> */}
      <TouchableOpacity style={{backgroundColor:'rgba(203, 0, 0, 1)', height:30, top:0}}  onPress={generatePdf}>
        <Text style={{fontSize:16, fontWeight:'bold', color:'white',left:150}}>
        Print
        </Text>
      </TouchableOpacity>
      <View></View><StatusBar style="auto" />

      </View>
    </ View>
  );
}

const styles = StyleSheet.create({

    container:{
       // padding:'5%',
        flex:1,
        justifyContent:'space-evenly',
        top:20
    },
    _image_2_3:{
      position:'absolute',
      width:'100%',
      height:'40%',
  
  
    },
    _image_2:{
      bottom:SCREEN_HEIGHT*0.7,
    },

  bg_image:{
    top:-30,
    width:'100%',
    height:'100%',

},

main:{
  paddingHorizontal:'5%',
  backgroundColor:'white',
  marginTop:'10%'

},
r1:{
  backgroundColor:'white',
  flex:0.95,
  //justifyContent:'space-evenly',


  justifyContent:'space-around',
},
  record:{
    height:'20%',
    fontWeight:'bold',
    //textAlign:'left',
    //top:-20,
    left:20,
    
  },
  parameters:{
    // textAlign:"center",
    justifyContent:"space-between"
  },
  tempstyle:{
    height:30,
    width:70,
    textAlign:'center',
    margin:10,
    left: 238,
		right: "auto",
		top: 201,
		bottom: "auto",
    borderRadius:10,
    alignItems:"flex-end"
  },
  
  spostyle_:{
     width:'80%',
     
     backgroundColor:'rgb(245,245,245)',
     justifyContent:'center',
     alignItems: 'center',
  },
  spostyle:{
    height:30,
    width:'50%',
    borderRadius:10,
    textAlign:'center',
    margin:5,
    backgroundColor:'rgb(245,245,245)',
  },
  textInput: {
    alignSelf:'stretch',
    padding:8,
    //margin:8,
    borderBottomColor:'#333333',
    borderWidth:1,
    fontSize:11,
    height:40
   
  },
  med1record:{
    justifyContent:"space-evenly",
    textAlign:"center",
    flexDirection: 'row',
  

  },
  textInput2: {
    alignSelf:'stretch',
    padding:10,
    margin:10
  },
  
  record:{
   padding:'5%',
   //fontFamily:'Poppins_Black',

  },

  temp_input:{
   flexDirection: 'row',
   justifyContent:'space-between',
   alignItems:'center',
  },

  med1:{
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dropdown: {
          
    top:0,
    left:SCREEN_WIDTH*1/80,
      margin: 16,
      height: 30,
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
});
    
const imageUrl_image_3 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/5c0ad5d4dbcd1a5a665c056c58fcec3b"
export default Prescription;