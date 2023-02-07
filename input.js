import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions , Image, AppRegistry,TextInput} from 'react-native';


export default function App(){

	return(
		<View style={{flex:1}}>

			<TextInput style={{position:'absolute',borderColor:'#333333', borderWidth:2, top:200, width:'55%', left:90, height:'10%'}}  onChangeText={(text) => console.log({text})}/>
			<TouchableOpacity style={{top:350, left:200, backgroundColor:'red', width:70,}}>
				<Text style={{color:'white',fontSize:20}}>
					Done
				</Text>
			</TouchableOpacity>
		</View>


	);
}
