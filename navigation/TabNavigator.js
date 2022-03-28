import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from 'react-native';
import imagepath from '../Constant/imagepath';


import { MainStackNavigator, MapStackNavigator, FetchStackNavigator, NotificationStackNavigator, ListStackNavigator} from "./StackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>

      <Tab.Screen name="Homes" component={MainStackNavigator} 
      options={{
        tabBarIcon: ({focused})=>{
        return(
            <Image source={imagepath.icHome} />
        )
        }
    }}/>
      
      <Tab.Screen name="Map" component={MapStackNavigator} 
       options={{
         headerShown:false,
         tabBarIcon: ({focused})=>{
          return(
              <Image source={imagepath.icMap} />
          )
          }
        
        }}
       
       />

       <Tab.Screen name="Fetch" component={FetchStackNavigator} 
       options={{
         headerShown:false,
         tabBarIcon: ({focused})=>{
          return(
              <Image source={imagepath.icFetch} />
          )
          }
       
       
       }} />

     <Tab.Screen name="Notification" component={NotificationStackNavigator} 
       options={{
         headerShown:false,
         tabBarIcon: ({focused})=>{
          return(
              <Image source={imagepath.icNotification} />
          )
          }
       
       
       }} />

       <Tab.Screen name="List" component={ListStackNavigator} 
       options={{
         headerShown:false,
         tabBarIcon: ({focused})=>{
          return(
              <Image source={imagepath.icList} />
          )
          }
       
       
       }} />


    </Tab.Navigator>
  );
};

export default BottomTabNavigator;