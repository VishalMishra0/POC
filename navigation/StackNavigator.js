import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import CamGall from "../screens/CamGall";
import Login from "../screens/Login";
import Map from "../screens/Map";
import Fetch from "../screens/Fetch";
import ToDo from "../screens/ToDo";
import List from "../screens/List";
import Notification from "../screens/Notification";


const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>

      <Stack.Screen name="Home" component={Home} 
        options={{headerShown:false}}
        
      />

      <Stack.Screen name="CamGall" component={CamGall}
       />

       <Stack.Screen name="ToDo" component={ToDo}
       
       />

    </Stack.Navigator>
  );
}

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Logins" component={Login}
      options={{headerShown:false}} />
    </Stack.Navigator>

  );
}

 const MapStackNavigator = () => {
   return (
     <Stack.Navigator>
 <Stack.Screen name ="Maps" component={Map} 
  // options={{headerShown:false}} 
  />
     </Stack.Navigator>
   )
 }


 const FetchStackNavigator = () => {
  return (
    <Stack.Navigator>
<Stack.Screen name ="Fetchs" component={Fetch} />
    </Stack.Navigator>
  )
}

const NotificationStackNavigator =() => {
  return (
    <Stack.Navigator>
      <Stack.Screen name ="Notifications" component ={Notification} 
      />
    </Stack.Navigator>
  )
}
const ListStackNavigator =() => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Lists" component={List} />
    </Stack.Navigator>
  )
}

export { MainStackNavigator, ContactStackNavigator, MapStackNavigator, FetchStackNavigator, NotificationStackNavigator , ListStackNavigator};