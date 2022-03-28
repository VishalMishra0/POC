import React from "react";
import { View, StyleSheet, Text,TextInput,navigation,Button, Alert } from "react-native";
import Home from './Home'
import UserInfo from "./UserInfo";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const signIn = async () => {
try {
  GoogleSignin.configure(
  {
    //webClientId is required if you need offline access
    androidClientId: '1045929760230-aas6a52g8h0jf7i46aako52qburs5i1t.apps.googleusercontent.com',
    scopes: ['profile', 'email']
  });
  await GoogleSignin.hasPlayServices();
  console.log("reached google sign in");
  const userInfo = await GoogleSignin.signIn();
  Alert.alert(
    "Welcome",
    "You're Logged In Now",
    [
      { text: "Let's Start", onPress: () => navigation.navigate('UserInfo'),},
    ]
  );
  // console.log(userInfo);
  console.log('SignedIN sucessful')
 
} catch (error) {
  if (error.code === statusCodes.SIGN_IN_CANCELLED) {
    console.log("error occured SIGN_IN_CANCELLED");
    // user cancelled the login flow
  } else if (error.code === statusCodes.IN_PROGRESS) {
    console.log("error occured IN_PROGRESS");
    // operation (f.e. sign in) is in progress already
  } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
    console.log("error occured PLAY_SERVICES_NOT_AVAILABLE");
  } else {
    console.log(error)
   
  }
}
};

const signOut = async () => {
  try {
    await GoogleSignin.signOut();
    console.log('Signed Out')
  } catch (error) {
    console.error(error);
  }
};





const Login = ({navigation}) => {
  return (
<View style={style.body}> 
     <Text style={style.headerText}>Welcome To Login</Text>
      <View style={style.headerContainer}>
        <Text>Enter Name:</Text>
        <TextInput 
         multiline
            style={style.input}
             placeholder='e.g Vishal Mishra'
                //   onChangeText={(val)=>setName(val)}
    />
                  <Text>Enter Password:</Text>
                    <TextInput 
                             style={style.input}
                             placeholder='e.g xyz^%34'
                //   onChangeText={(val)=>setAge(val)}
     />
             {/* <Text>name:{name},age:{age}</Text> */}
          <Text onPress={()=>navigation.navigate('Home')}style={style.tapLogin}>Login</Text>
          <GoogleSigninButton
          onPress={signIn}
          style={{width: 111}} 
          color={ GoogleSigninButton.Color.Dark}

         />
          <Button 
           title="Sign Out"
           onPress={signOut}
          />
       </View>
     </View>
  )                                
} 


const style=StyleSheet.create({

  body:{
    flex:1,
    paddingTop:40,
backgroundColor:'#fff',
fontWeight:'Bold',
  },
    headerContainer:{
        backgroundcolor:'Yellow',
        alignItems:'center',
        justifyContent:'center',
        margin:70,
        fontWeight:'Bold',
    
      },
      input:{
        fontWeight:'bold',
        borderWidth:1,
        borderColor:'black',
        padding:10,
        margin:15,
        width:200,
        justifyContent:'center'
      },
      headerText:{
          color:'black',
          fontSize:40,
          alignSelf:'center'

      },
      tapLogin:{
        backgroundColor: 'black',
        width:104,
        margin:35,
        color:'#fff',
        lineHeight:40,
        fontSize:20,
        textAlign:'center'
      },
      
    // body:{
    //   backgroundColor: '#333',
    //   flex:1,
    // },

//   headerText:{
//     color:'#fff',
//     fontSize:40,
//     alignSelf:'center'
//   },
  

}
)

export default Login;