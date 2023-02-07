import React, {Component, useEffect, useState} from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions , Image, TextInput, Alert} from 'react-native';



const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT
  } = Dimensions.get('window');
  
const MyDoc1=({navigation})=>{

    return(
<View style={{flex:1}}>
<Image style={[styles._image_2, styles._image_2_3]} source={{ uri: imageUrl_image_3 }}></Image>
<Image style={[styles._image_3, styles._image_2_3]} source={{ uri: imageUrl_image_3 }}></Image>

<TouchableOpacity onPress={()=>navigation.navigate('Pinfo',{pid:'3tWfoQME6RAIEZLi9oC'})}>
    
        <View style={[styles.container,styles.innerContainer,{top:120}]}>
            <Text style={styles.itemHeading}>
                Sushmita
            </Text>
            <Text style={{fontWeight:'bold'}}>
                Phone: 9658740896
            </Text>
            <Text style={{fontWeight:'bold'}}>
                Relation: Sister
            </Text>

        </View>
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
        height:120,
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
    _image_2_3:{
        position:'absolute',
        width:'100%',
        height:'20%',
    
    
      },
      _image_2:{
        bottom:SCREEN_HEIGHT*0.9,
      },
      _image_3:{
        top:SCREEN_HEIGHT*0.9,
      },
})
export default MyDoc1;

const imageUrl_image_2 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/834df87c4562e0ddfe7154e4b2999d1d"
const imageUrl_image_3 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/5c0ad5d4dbcd1a5a665c056c58fcec3b"
