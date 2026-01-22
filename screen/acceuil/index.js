import { View, Text, FlatList,Image,StyleSheet } from "react-native";
import React from "react";
import { present } from "../../outils/fakeData";


const Acceuil = () => {
  return (
    <View>
      <Text style={styles.titre}>Liste des donnees</Text>
    <FlatList
      data={present}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.container}>

          <View style={styles.containerImg}>
          <Image style={styles.img} source={item.image} />
          <Text style={styles.nom}> {item.name}</Text>
          </View>

          
          <Text style={styles.description}> {item.description}</Text>
          <Text style={styles.age}>{item.age} Ans</Text>
          <Text style={styles.ville}>{item.city}</Text>
          
        </View>
      )}

    />
    


    
    </View>
  );
}
export default Acceuil;

const styles = StyleSheet.create({
  //titre style
  titre: {
  color: "#000000",
  fontSize: 20,
  textAlign: "center",
  fontWeight: "bold",
  margin: 10,
  },

  //container style
  container: {
    backgroundColor: "#f9f9f9",
    marginBottom: 20,
    elevation: 5,
    padding: 10,
  },

  //container image and name style
  containerImg: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },


  //image style
  img: {
    width: 90,
    height: 90,
    borderRadius: 50,
  },

  //name style
  nom: {
    color: "#040000",
    fontSize: 20,
    fontWeight: "Bold",
    marginRight: 30,

  },

  //description style
  description: {
    marginBottom: 10,
    fontStyle: "italic",
    textAlign: "justify",
  },

  //age style
  age: {
    marginBottom: 5,
    fontWeight: "bold",
  },

  //city style
  ville: {
    fontWeight: "bold",
    marginBottom: 5,

  },



});