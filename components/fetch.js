import React, {useState,useEffect} from 'react';
import { Text, View, TextInput,StyleSheet,Pressable,FlatList, Button } from 'react-native';
import { firebase } from './config';


const Fetch=()=> {
    var times=[];
    var len;
   
    const [users, setUsers]=useState([]);
    const todoRef=firebase.firestore().collection('Allergies');
    useEffect(()=>{

        todoRef
        .onSnapshot(
            querySnapshot=>{
                const users=[]
                querySnapshot.forEach((doc) => {
                    const{foods, title}=doc.data()
                   // pName.push(doc.id)
                   //console.log(foods.length)
                   var leng=foods.length
                   //console.log(len);
                    users.push({
                        id:doc.id,
                       title,
                       foods
                    })
                    //console.log(len);
                    len=leng;
                })
                setUsers(users)
                //console.log(len);
                
                
               
               
            },
            
        )
        //console.log(len);
    },[])
    
    console.log(users);
    len=(users[0]['foods'].length)
    var p=[...Array(len).keys()];
  
   


return(
           
    <View style={{flex:1, marginTop:100}}>

<FlatList
style={{height:'100%'}}
data={users}
numColumns={1}


renderItem={({item})=>(
   
    <Pressable>
        <View style={styles.innerContainer}>
            <Text style={styles.itemHeading}>
                {item.title}
            </Text>
            <Text>
            {p.map(a=>{
            return( 
            <View>

            <Text key={a}>{item.foods[a]  },{'  '}</Text>
            
            </View>)
            })}
            </Text>
            
            
        </View>

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
flexDirection:'row',
alignItems:'center'
},
innerContainer: {
alignItems: 'center',
flexDirection: 'column',
marginLeft:45,
},
itemHeading: {
fontWeight: 'bold',
fontSize:18,
marginRight:22
},
});



export default Fetch;
