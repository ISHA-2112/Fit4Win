import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions , Image} from 'react-native';


const { 
	width: SCREEN_WIDTH, 
	height: SCREEN_HEIGHT 
	} = Dimensions.get('window');


const Welcome=({navigation})=>{

    return(
        <View style={{flex:1}}>

    <View>
			<TouchableOpacity style={style._Rectangle_1} onPress={()=>navigation.navigate('Plogin')} >
        <Text style={{color: 'white', fontWeight:'bold', fontSize:SCREEN_HEIGHT*20/759, position:"relative",top:9, left:SCREEN_WIDTH/3.26 }}>
						Login
					</Text>
			</TouchableOpacity>

		</View>

		<View>
    <TouchableOpacity style={style._Rectangle_2} onPress={()=>navigation.navigate('Pregister')} >
        <Text style={{ position:"relative",color: 'rgba(203, 0, 0, 1)', fontWeight:'bold', fontSize:SCREEN_HEIGHT*20/759,justifyContent:'center',top:8, left:SCREEN_WIDTH/3.26 }}>
          Sign in
        </Text>
    </TouchableOpacity>
    <Image style = {style._image_2} source = {{uri: imageUrl_image_2}}>
			</Image>
	<Image style = {style._image_3} source = {{uri: imageUrl_image_3}}>
			</Image>
    <Image style = {style.logo} source = {{uri: imageurl_logo}}>
            </Image>
      <Text style = {style._Welcome_Back_ }>
				  {'    '}#Fit4Win
			</Text>

  </View>
  <Text style = {style._Are_you_a_doctor_}>Are you a Doctor?</Text>  
  <TouchableOpacity style={style.click_component} onPressOut={()=>navigation.navigate('Dlogin')}>
	<Text style={style.click_here}>
		Click here
	</Text>
  </TouchableOpacity>
</View>


    )
}

const style = StyleSheet.create({
	_Rectangle_1: {
		position: "absolute",
		width: SCREEN_WIDTH*3.9/5,
		height: SCREEN_HEIGHT*0.083,
		borderRadius: 40,
		opacity: 1,
		left: 0,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: SCREEN_WIDTH/9},
			{translateY: SCREEN_HEIGHT*4/6},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(203, 0, 0, 1)",
	},
  _Rectangle_2: {
		position: "absolute",
		width: SCREEN_WIDTH*3.9/5,
		height: SCREEN_HEIGHT*0.083,
		borderRadius: 40,
		opacity: 1,
		borderWidth: 2,
		borderColor: "rgba(203, 0, 0, 1)",
		left: 0,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: SCREEN_WIDTH/9},
			{translateY: SCREEN_HEIGHT*4.65/6},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(203, 0, 0, 0)",
	},
  _image_2: {
		position: "absolute",
		width: '100%',
		height: SCREEN_WIDTH,
		borderRadius: 0,
		opacity: 1,
		left: 0,
		//right: "auto",
		top: 0,
		//bottom: "auto",
		transform: [
			{translateX: SCREEN_WIDTH*0.7},
			{translateY: SCREEN_HEIGHT*0.87},
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
	  top: -SCREEN_HEIGHT*0.45,
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
		width: 360*250/SCREEN_WIDTH,
		height:640* 225.877197265625/SCREEN_HEIGHT,
		borderRadius: 0,
		opacity: 1,
		left:0,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: SCREEN_WIDTH*0.17},
			{translateY: SCREEN_HEIGHT*0.22},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
  _Welcome_Back_: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 0.23*SCREEN_WIDTH,
		right: "auto",
		top: 0.57*SCREEN_HEIGHT,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "serif",
		fontWeight: "900",
		textDecorationLine: "none",
		fontSize: 0.05*SCREEN_WIDTH,
		color: "rgba(203, 0, 0, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
  _Are_you_a_doctor_: {
		position: "absolute",

		left: SCREEN_WIDTH*0.13,
		right: "auto",
		top: SCREEN_HEIGHT*0.9,

		fontFamily: "serif",
		fontWeight: '700',
		fontSize: SCREEN_WIDTH*0.032,
		color: "#333333",
		// textAlign: "left",
		// textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	click_here:{

		//position:"absolute",
		left:SCREEN_WIDTH*0.6,
		top: SCREEN_HEIGHT*0.9,
		//backgroundColor:'white',
		color:'rgba(203, 0, 0, 1)',
		fontSize: SCREEN_WIDTH*0.035,
		fontFamily: "serif",
		fontWeight: '700',
		textDecorationLine: 'underline'
	},
	click_component:{
		width:120,
		height:40
	}
	},
);
//console.log(SCREEN_WIDTH);
const imageurl_logo="https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/9030434ce2a74a7955c24f13c15d46c4"
const imageUrl_image_3 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/e9034cbadba383a399b5def3dc9945c3"
const imageUrl_image_2 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/63403b6fa74bdea950d9fc44234856db"

export default Welcome;