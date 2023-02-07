import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions , Image, AppRegistry, LogBox} from 'react-native';

import 'react-native-gesture-handler'

import Plogin from './components/plogin';
import Pregister from './components/pregister';
import Welcome from './components/welcome';
import HomePage from './components/HomePage';
import Allergies from './components/Allergies';
import Home from './components/Otp';
import Dlogin from './components/Dlogin';
import DocInfo from './components/DocInfo';
import FindDoc from './components/FindDoc';
import MyDoc from './components/myDoc';
import Dregister from './components/Dregister';
import AddAllergies from './components/AddAllergies';
import Medications from './components/Medications';
import AddMed from './components/AddMed';
import BlinkApp from './components/Blink';
import Plist from './components/Plist';
import Pinfo from './components/Pinfo';
import Prescription from './components/Prescription';
import History from './components/History';
import Flist from './components/Flist';
import AddFam from './components/AddFam';
import MyDoc1 from './components/MyDoc1';
import ViewFamily from './components/ViewFamily';
import MoreInfo from './components/MoreInfo';
// import Fetch from './components/fetch';
// import Scroll from './components/scroll';
// import Calendar from './components/calendaer';
// import Send from './components/Send';

import { enableScreens} from 'react-native-screens';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
enableScreens();

LogBox.ignoreAllLogs();
//console.log(SCREEN_HEIGHT);

const Stack= createNativeStackNavigator();

export default function App(){

	return(
	

<NavigationContainer>
	<Stack.Navigator  screenOptions={{
    headerShown: false
  }
 
  }
  initialRouteName={Allergies}>
	<Stack.Screen name='Welcome' component={Welcome}/>
	<Stack.Screen name='Home' component={Home}/>
	<Stack.Screen name='Dregister' component={Dregister}/>
	<Stack.Screen name='Pregister' component={Pregister}/>
	<Stack.Screen name='Plogin' component={Plogin}/>
	<Stack.Screen name='Dlogin' component={Dlogin}/>
	<Stack.Screen name='DocInfo' component={DocInfo}/>
	<Stack.Screen name='FindDoc' component={FindDoc}/>
	<Stack.Screen name='MyDoc' component={MyDoc}/>
	<Stack.Screen name='Medications' component={Medications}/>
	<Stack.Screen name='AddMed' component={AddMed}/>
	<Stack.Screen name='Plist' component={Plist}/>
	<Stack.Screen name='Pinfo' component={Pinfo}/>
	<Stack.Screen name='Allergies' component={Allergies}/>
	<Stack.Screen name='AddAllergies' component={AddAllergies}/>
	<Stack.Screen name='HomePage' component={HomePage}/>
	<Stack.Screen name='Prescription' component={Prescription}/>
	<Stack.Screen name='History' component={History}/>
	<Stack.Screen name='Flist' component={Flist}/>	
	<Stack.Screen name='AddFam' component={AddFam}/>
	<Stack.Screen name='MyDoc1' component={MyDoc1}/>
	<Stack.Screen name='ViewFamily' component={ViewFamily}/>
	<Stack.Screen name='MoreInfo' component={MoreInfo}/>	
	</Stack.Navigator>

</NavigationContainer>

	);
}



