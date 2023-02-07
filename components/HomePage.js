import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions, Image, AppRegistry, SafeAreaView } from 'react-native';


const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT
} = Dimensions.get('window');

const HomePage = ({route,navigation}) => {
  const {id}=route.params;
  //console.log(id)
  return (
    <SafeAreaView style={styles.container}>
      <Image style={[styles._image_2, styles._image_2_3]} source={{ uri: imageUrl_image_3 }}></Image>
      <Image style={[styles._image_3, styles._image_2_3]} source={{ uri: imageUrl_image_3 }}></Image>
      <View style={styles.flex_1}>
        <View style={styles.flex1_1} >
      <TouchableOpacity onPress={()=>navigation.navigate('ViewFamily')}>
        
        <Image style={styles._image_9} source={{ uri: imageUrl_image_9 }}></Image>

          <Text style={styles.font_button}>My Family </Text>
        </TouchableOpacity> 
        </View>
        
        <View style={styles.flex1_1}>
        <TouchableOpacity onPress={()=>navigation.navigate('Flist',{pid:id})}>

        <Image style={styles._image_1} source={require('../assets/Frame6.jpg')}></Image>
          <Text style={styles.font_button}> Add Family Member </Text>
        </TouchableOpacity>
        </View>
      </View>

      <View style={styles.flex_1}>
        <View style={styles.flex1_1}>
        <TouchableOpacity onPress={()=>navigation.navigate('Allergies',{pid:id})}>

        <Image style={styles._image_4} source={require('../assets/Frame5.jpg')}></Image>
          <Text style={styles.font_button}> Allergies </Text>
        </TouchableOpacity>
        </View>
        <View style={styles.flex1_1}>
        <TouchableOpacity onPress={()=>navigation.navigate('Medications',{pid:id})}>

        <Image style={styles._image_7} source={{ uri: imageUrl_image_7 }}></Image>
          <Text style={[styles.font_button,{top:15}]}> Medications </Text>
        </TouchableOpacity>
        </View>

      </View>

      <View style={styles.flex_1}>
        <View style={styles.flex1_1}>
        <TouchableOpacity onPress={()=>navigation.navigate('FindDoc',{pid:id})}>
          
          <Image style={styles._image_6} source={{ uri: imageUrl_image_6 }}></Image>
          <Text style={styles.font_button}> Find a Doctor </Text>
        </TouchableOpacity>
        </View>

        <View style={styles.flex1_1}>
        <TouchableOpacity onPress={()=>navigation.navigate('MyDoc1',{pid:id})}>
          
        <Image style={styles._image_5} source={{ uri: imageUrl_image_5}}></Image>
          <Text style={styles.font_button}>My Doctors</Text>
          </TouchableOpacity>
        </View>

      </View>




    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: "10%",
    flexDirection: "column-reverse",


  },



  homeContainer: {

    width: '100%',
    height: '100%',


  },

  titles: {
    marginTop: '20%',
    width: '100%',
    margin: '5%',
    fontSize: 5 * SCREEN_WIDTH / 36,
    fontWeight: '700',
    color: 'rgb(220,20,60)',


  },

  title: {

  },

  subtitle: {
    fontSize: SCREEN_WIDTH / 24,
    color: 'rgb(220,20,60)',


  },

  // button_block: {
  //   color: 'rgb(220,20,60)',

  // },

  flex_1: {
    flex: 0.27,
    width:SCREEN_WIDTH,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  flex1_1: {
    width: "40%",
    height: 139 * SCREEN_HEIGHT / 640,
    backgroundColor: "rgb(203, 0, 0)",
    borderRadius: 20,
    top:5
  },


  font_button: {
    position: 'relative',
    color: "white",
    padding: '15%',
    //paddingBottom:'5%',
    //paddingTop: SCREEN_HEIGHT*5/32,
    fontWeight: '600',
    fontFamily: 'Roboto',
    fontSize: SCREEN_WIDTH * 0.03,
    bottom:0.001
    //justifyContent:'center'
    
   


  },
  _image_1: {
    position: "relative",
    padding:'15%',
		width: SCREEN_WIDTH*0.22,
		height: SCREEN_WIDTH*0.22,
    borderRadius: 0,
    opacity: 1,
    left: SCREEN_WIDTH * 0.08,
    right: "auto",
    top: 18,
    bottom: "auto",
    transform: [
      { translateX: 0 },
      { translateY: 0 },
      { rotate: "0deg" },
    ],
    backgroundColor: "rgba(0,0,0,0)",
  },
  _image_2_3:{
    position:'absolute',
    width:'100%',
    height:'20%',


  },
  _image_2:{
    bottom:SCREEN_HEIGHT*0.9,
  },
  _image_3:{
    top:SCREEN_HEIGHT*0.93,
  },
  _image_4: {
    position: "relative",
    padding:'15%',
		width: SCREEN_WIDTH*0.22,
		height: SCREEN_WIDTH*0.22,
    borderRadius: 0,
    opacity: 1,
    left: SCREEN_WIDTH * 0.08,
    right: "auto",
    top: 18,
    bottom: "auto",
    transform: [
      { translateX: 0 },
      { translateY: 0 },
      { rotate: "0deg" },
    ],
    backgroundColor: "rgba(0,0,0,0)",
  },
  _image_5: {
    position: "relative",
    padding:'15%',
		width: SCREEN_WIDTH*0.22,
		height: SCREEN_WIDTH*0.22,
    borderRadius: 0,
    opacity: 1,
    left: SCREEN_WIDTH * 0.1,
    right: "auto",
    top: 10,
    bottom: "auto",
    transform: [
      { translateX: 0 },
      { translateY: 0 },
      { rotate: "0deg" },
    ],
    backgroundColor: "rgba(0,0,0,0)",
  },
  _image_6: {
    position: "relative",
    //padding:'15%',
		width: SCREEN_WIDTH*0.25,
		height: SCREEN_WIDTH*0.25,
    borderRadius: 0,
    opacity: 1,
    left: SCREEN_WIDTH * 0.08,
    right: "auto",
    top: 10,
    bottom: "auto",
    transform: [
      { translateX: 0 },
      { translateY: 0 },
      { rotate: "0deg" },
    ],
    backgroundColor: "rgba(0,0,0,0)",
  },
  _image_7: {
    position: "relative",
    padding:'10%',
		width: SCREEN_WIDTH*0.22,
		height: SCREEN_WIDTH*0.22,
    borderRadius: 0,
    opacity: 1,
    left: SCREEN_WIDTH * 0.08,
    right: "auto",
    top: 20,
    bottom: "auto",
    transform: [
      { translateX: 0 },
      { translateY: 0 },
      { rotate: "0deg" },
    ],
    backgroundColor: "rgba(0,0,0,0)",
  },
  _image_9: {
    position: "relative",
		width: SCREEN_WIDTH*0.22,
		height: SCREEN_WIDTH*0.22,
    borderRadius: 0,
    opacity: 1,
    left: SCREEN_WIDTH * 0.1,
    right: "auto",
    top: SCREEN_HEIGHT / 58,
    bottom: "auto",
    transform: [
      { translateX: 0 },
      { translateY: 0 },
      { rotate: "0deg" },
    ],
    backgroundColor: "rgba(0,0,0,0)",
  },

});


const imageUrl_image_7 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/fd2cd51ddda2ab740b91414157d866d1"
const imageUrl_image_9 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/29e0c34a6e7f751fa3d4d8a11369d71b"
const imageUrl_image_5 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/bf61385ed5d1e285843e73c06b0bd749"
const imageUrl_image_3 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/5c0ad5d4dbcd1a5a665c056c58fcec3b"
const imageUrl_image_6 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/87efc7bfcffc31fec0845dbedc9fe3ad"
const imageUrl_image_2 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/834df87c4562e0ddfe7154e4b2999d1d"

//console.log(SCREEN_WIDTH);
export default HomePage;