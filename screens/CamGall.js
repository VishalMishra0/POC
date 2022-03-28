import React,{useState} from "react";
import { Button, PermissionsAndroid, SafeAreaView, StatusBar, StyleSheet, Text, View , Image} from "react-native";
import {launchCamera, launchImageLibrary }from 'react-native-image-picker'; 

const CamGall = () => {
  
  const [imageUri, setimageUri] = useState('https://reactjs.org/logo-og.png');
  let options = {
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  
  const requestCameraPermission = async () => {
    try{
      await launchCamera(options, (response) =>
      {
        console.log('Response=', response)
      })
      
  
    }catch(err){
      console.warn(err);
    }
      
  
  };
  
  const requestGalleryPermission = async () => {
    try{
      await launchImageLibrary(options, (response) =>
      {
        console.log('Response=', response);
        const source =response.assets[0].uri;
        setimageUri(source);
      })
      
  
    }catch(err){
      console.warn(err);
    }
      
  
  };
   
  return(


// const List = () => (
  <View>
      <Image
      source={{uri: imageUri}}
      style={{
        margin:138,
        height:100,
        width:100,
        borderWidth:1,
        borderColor:'black'
      }}
      />

  <View style={styles.container}>
    {/* <Text style={styles.item}>Try Permission</Text> */}
    <View>
    <Button title="Camera" color={'black'}onPress={requestCameraPermission} />
    </View>

    <View style={styles.Gall}>

    <Button title="Gallery" color={'#61DBFB'} onPress={requestGalleryPermission} />
  </View >
  </View>

  </View>
)};

const styles = StyleSheet.create({
  container: {
    
    justifyContent: 'center',
    alignItems:'center',
    // paddingTop: StatusBar.currentHeight,
    backgroundColor: "#ecf0f1",
    flexDirection: 'row',
  },
  Gall:{
    justifyContent:'center',
    alignItems:"center",
    marginLeft:50,

  },
  // item: {
  //   margin: 24,
  //   fontSize: 19,
  //   fontWeight: "bold",
  //   textAlign: "center"
  // }
});

export default CamGall;




