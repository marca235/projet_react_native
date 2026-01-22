import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Parametre = ({navigation}) => {
  return (
    <View>
      <Text>Parametre</Text>

      <TouchableOpacity onPress={() => navigation.navigate("Acceuil")}>
              <Text>Aller a l'acceuil</Text>
            </TouchableOpacity>
    </View>
  );
}

export default Parametre;