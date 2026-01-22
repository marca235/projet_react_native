import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Acceuil from '../acceuil';
import Parametre from '../parametre';
import {Ionicons} from "@expo/vector-icons";



const Tabs = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tabs.Navigator 
    screenOptions={({route}) => ({
      tabBarIcon: ( {color, size, focus})=> {
        let iconsName;
        if(route.name ===  "Acceuil"){
          iconsName = focus ? "home" : "home-outline"
        } 
        else if (route.name ===  "Parametre"){
          iconsName = focus ? "settings" : "settings-outline"
        }
        return <Ionicons name={iconsName} color={color} size={size} />
       },
      tabBarStyle: {backgroundColor: "#6065613d"},
      tabBarActiveTintColor: "white",
      tabBarInactiveTintColor: "gray",
    } )}
    >
        <Tabs.Screen name="Acceuil" component={Acceuil} />
        <Tabs.Screen name="Parametre" component={Parametre} />
    </Tabs.Navigator>
      
    
  );
};

export default BottomTab;