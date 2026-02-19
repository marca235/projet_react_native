import { StyleSheet,View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Parametre from "../screen/parametre";
import Acceuil from "../screen/acceuil";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTab from "../screen/tabs";
import { BottomTabs } from "react-native-screens";
import DrawerNavigator from "../screen/drawer";
import Depense from "../screen/depense";
import Login from "../screen/login";
import Register from "../screen/register";


const Stack = createNativeStackNavigator();

const Routes = ({ navigation}) => {
  return (
   <NavigationContainer initialRouteName="Login">
    <Stack.Navigator >
        <Stack.Screen name="Depense" component={Depense} options={{headerShown : false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown : false}}/>
        <Stack.Screen name="Register" component={Register} options={{headerShown : false}}/>
        <Stack.Screen name="Acceuil" component={Acceuil} options={{headerShown : false}}/>
       

    </Stack.Navigator>
   </NavigationContainer>
  );
}
export default Routes;

const styles = StyleSheet.create({});