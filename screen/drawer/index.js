import {View, Text} from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Acceuil from '../acceuil';
import Parametre from '../parametre';
import { Ionicons } from '@expo/vector-icons';


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screeenOption={({route}) => ({
        drawerIcon: ( {color, size, focus})=> {
                let iconsName;
                if(route.name ===  "Acceuil"){
                  iconsName = focus ? "home" : "home-outline"
                } 
                else if (route.name ===  "Parametre"){
                  iconsName = focus ? "settings" : "settings-outline"
                }
                return <Ionicons name={iconsName} color={color} size={size} />
 
               },

        drawerActiveBackgroundColor: "#bdbaafbe",
        drawerActiveTintColor: "white",
        drawerInactiveTintColor: "gray",

        
    })}>
      <Drawer.Screen name="Acceuil" component={Acceuil} />
      <Drawer.Screen name="Parametre" component={Parametre} />
    </Drawer.Navigator>
  );
}
export default DrawerNavigator;