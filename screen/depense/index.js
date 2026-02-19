import { View, Text,Image,StyleSheet,TouchableOpacity,TextInput,FlatList,Alert, Keyboard } from "react-native";
import React, { useState,useEffect } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/fr";
import AsyncStorage from "@react-native-async-storage/async-storage";


dayjs.locale("fr");
dayjs.extend(relativeTime);


const Depense = () => {

    const [Depense, setDepense] = useState([]);
    const [nom, setNom] = useState("");
    const [montantDepense, setMontantDepense] = useState("");
    const KEY_STORAGE = "DEPENSES";

    useEffect(() => {
        //charger les depenses depuis le stockage local
        const loadDepenses = async () => {
            try {
               const loadData = await AsyncStorage.getItem(KEY_STORAGE);
               if (loadData) {
                setDepense(JSON.parse (loadData));
               }
                
            } catch (error) {
                 console.log(error);
            }
        }
        loadDepenses();
    })

    //persistance les depenses dans le stockage local
    const persistItems = async (newMessage) => {
        try {
            await AsyncStorage.setItem(KEY_STORAGE, JSON.stringify(newMessage));
        } catch (error) {
            console.log(error);
        }
    };

    function valider() {

        const nomDepense1 = nom.trim();
        const montantDepense1 = montantDepense.trim();

        if (!nomDepense1 || !montantDepense1) {
            Alert.alert("Erreur","Veuillez remplir tous les champs");
            return;
        }
        

        const newItem = {
            id: Math.random().toString(),
            nom: nomDepense1,
            montant: montantDepense1,
            dateAjout:  Date().toLocaleString(),
        }
        setDepense([newItem,...Depense]);
        persistItems([newItem,...Depense]);
        Keyboard.dismiss();
        


        //vider les champs apres validation
        setNom("");
        setMontantDepense("");
        
    };

    function deleteItem(id){
        Alert.alert("Confirmation","Voulez-vous supprimer cette depense ?",[
            {
                text:"Cancel",
                 style:"cancel",
            },
            {
                text:"Confirmer",
                style:"destructive",
                onPress: () => {
                    //supprimer l'element
                    (del) => del.filter((data) => data.id !==id);


                    //mettre a jour la liste apres suppression
                    setDepense((dep) => dep.filter((data) => data.id !== id));
                   
                }

            }

        ]);
    }


  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image style={styles.img}source={require('./../../assets/Emetteur.jpg')}/>
            <Text style={styles.textHeader}>Depense App</Text>
      </View>
       

      <View>
        <Text style={styles.formulaire}>Formulaire</Text>

        <View style={styles.containerInput}>
            <TextInput placeholder="nom de la depense"
                style={styles.input} 
                onChangeText={setNom} 
                value={nom}

             />

            <TextInput placeholder="Montant"
                style={styles.input}
                keyboardType="numeric"
                onChangeText={setMontantDepense}
                value={montantDepense}

            />
        </View>
        

        <TouchableOpacity style={styles.btn} onPress={valider}>
            <Text style={styles.valider}>Valider</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.donne}>Liste de donnees</Text>

      <FlatList 
        data={Depense}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
            <TouchableOpacity onLongPress={()=> deleteItem(item.id)}>
            <View style={styles.item}>
                <View style={styles.item1}>
                 <Text style={styles.nom}>{item.nom}</Text>
                <Text style={styles.date}>{dayjs(item.dateAjout).fromNow()}</Text>
                </View>
            <Text style={styles.montant}>$ {item.montant} US</Text>
            </View>
            </TouchableOpacity>
        )}
      />
        
    </View>
      
  );
}

export default Depense;


const styles = StyleSheet.create({

    //container style
    container:{
    flex:1,
    flexDirection:"column",
    },


    //header style
    header:{
        
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginBottom:10,
        backgroundColor:"#780606",
        elevation:5,
    },

    //image style
    img:{
        width:70,
        height:70,
        borderRadius:35,
        marginLeft:10,
        marginTop:10,
        marginBottom:10,
    },

    //text in header style
    textHeader:{
        color:"#fdfdfd",
        fontSize:25,
        fontWeight:"bold",
        paddingRight:20,
        marginTop:40,
        marginBottom:20,
    },

    //formulaire style
    formulaire:{
        fontSize:20,
        fontWeight:"bold",
        textAlign:"center",
        marginTop:20,
        marginBottom:20,
        backgroundColor:"#6d7676",
        padding:10,
        color:"#fff",
        borderRadius:10,
    },

    //container input style
    containerInput:{
        marginBottom:20,
        padding:10,

    },

    //input style
    input:{
        borderWidth:1,
        borderColor:"#ccc",
        borderRadius:5,
        padding:10,
        marginBottom:10,
        fontSize:16,
    },

    //button style
    btn:{
        backgroundColor:"#780606",
        padding:15,
        borderRadius:5,
        alignItems:"center",
        width:"45%",
        borderRadius:30,
        alignSelf:"center",
        bottom: 20,

    },

    //text in button style
    valider:{
        color:"#ffffff",
        fontSize:16,
        fontWeight:"bold",
        
    },

    //container style
    container:{
    flex:1,
    backgroundColor:"#f7f7f7",
    flexDirection:"column",
    },

    //item1 style
    item1:{
        flexDirection:"row",
        justifyContent:"space-between",
    },
    //item style
    item:{
        padding:10,
        marginVertical:10,
        marginHorizontal:6,
        borderRadius:5,
        borderBottomColor:"#780606",
        borderBottomWidth:2,
        position:"fixed",
    },

    //date style
    date:{
        fontSize:14,
        color:"#001121",
        paddingTop:5,
    },

    //nom style
    nom:{
        fontSize:18,
        fontWeight:"bold",
        color:"#001121",
    },

    //montant style
    montant:{
        fontSize:18,
        fontWeight:"italic",
        color:"#780606",
        paddingTop:5,
    },

    //donne style
    donne:{
        fontSize:20,
        fontWeight:"bold",
        textAlign:"center",
        marginTop:20,
        marginBottom:20,
        backgroundColor:"#6d7676",
        padding:10,
        color:"#fff",
    },

   
    
})