import { Text, View, TextInput,StyleSheet,Pressable,FlatList,Dimensions,Image, Button,TouchableOpacity } from 'react-native';
import React, {useState,useEffect} from 'react';
import Icon from "react-native-vector-icons/Ionicons";


const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT
  } = Dimensions.get('window');
  
const History=()=>{

return (

<View style={{flex:1, }}>
    <Image style={[styles._image_2, styles._image_2_3]} source={{ uri: imageUrl_image_3 }}></Image>
        
        <TouchableOpacity style={[styles.innerContainer,styles.container]}>
            <Text style={{fontWeight:'bold'}}>Date: 10-07-2022</Text>
        </TouchableOpacity>

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
         top:120
    },
    itemHeading: {
        fontWeight: 'bold',
        fontSize:18,
        marginRight:22, 
        top:0
    },
    _image_2_3:{
        position:'absolute',
        width:'100%',
        height:'20%',
    
    
      },
      _image_2:{
        bottom:SCREEN_HEIGHT*0.9,
      },
    })

    const imageUrl_image_3 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/5c0ad5d4dbcd1a5a665c056c58fcec3b"

export default History;