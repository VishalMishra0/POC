import { View, Text,StyleSheet} from 'react-native'
import React,{useState} from "react";
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation=useNavigation();
  return (
    <View style={style.body}> 
      <View style={style.tapWrapper}>
        <Text onPress={()=>navigation.navigate('CamGall')} style={style.tap}>CamGall</Text>
        <Text onPress={()=>navigation.navigate('ToDo')} style={style.tap}>To-Do</Text>
        <Text onPress={()=>navigation.navigate('Map')} style={style.tap}> LatLong</Text>
        <Text onPress={()=>navigation.navigate('Fetch')} style={style.tap}>Fetch</Text>
        <Text onPress={()=>navigation.navigate('Login')}style={style.tapLogin}>SignOut</Text>
      </View>
    </View>
  );
};

const style=StyleSheet.create({
     body:{
       backgroundColor:'white',
       flex:1,
      //  flexDirection:'column'
     },
tap:{
  // backgroundColor: '',
  borderColor:'black',
  borderWidth: 1,
  width:150,
  height:150,
  margin:2,
  color:'dodgerblue',
  lineHeight:130,
  fontSize:30,
  textAlign:'center'
},
tapLogin:{
  backgroundColor: 'dodgerblue',
  width:100,
  margin:120,
  color:'#fff',
  lineHeight:40,
  fontSize:20,
  textAlign:'center'
},
tapWrapper:{
  flexDirection:'row',
  flex:1,
  flexWrap:'wrap',
  padding:40,
  // padding:20, for mobile use this padding
}

})
export default Home