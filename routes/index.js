import { StyleSheet,View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Parametre from "../screen/parametre";
import Acceuil from "../screen/acceuil";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTab from "../screen/tabs";
import { BottomTabs } from "react-native-screens";
import DrawerNavigator from "../screen/drawer";


const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator >
        <Stack.Screen name="bottomTab" component={BottomTab} options={{headerShown : false}}/>

    </Stack.Navigator>
   </NavigationContainer>
  );
}
export default Routes;

const styles = StyleSheet.create({});