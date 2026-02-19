import { View,Text,StyleSheet,TouchableOpacity,TextInput,Image } from "react-native";
import React from "react";

const Login = ({ navigation }) => {
  return (
    <View style={styles.main}>

        <View style={styles.header}>
            <Image style={styles.img}source={require('./../../assets/Emetteur.jpg')}/>
        </View>
      <Text style={styles.connexion}>Fenetre de connexion</Text>
      <View style={styles.container}>
        <TextInput placeholder="your email" style={styles.email}/>
        <TextInput placeholder="your password" keyboardType="numeric"style={styles.password}/>

        <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate("Depense")}>
            <Text style={styles.Login} >Login</Text>
        </TouchableOpacity>
        <Text style={styles.message}>Vous n'avez pas de compte?</Text>
        <TouchableOpacity style={styles.button2} onPress={()=> navigation.navigate("Register")}>
            <Text style={styles.compte}>Creer un compte</Text>
        </TouchableOpacity>
      </View>

      
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({

    //styles pour le main
    main:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f5f5f5',
        position:'relative',
        bottom:"10%",
    },
    //styles pour le container
    container:{
        width:'80%',
        height:'40%',
        backgroundColor:'#ffffff',
        borderRadius:10,
        elevation:5,
        justifyContent:'center',
        alignItems:'center'
    },



    //styles pour email
    email:{
        width:'80%',
        height:40,
        borderWidth:1,
        borderColor:'#cccccc',
        borderRadius:5,
        marginBottom:20,
        paddingLeft:10
    },
    //styles pour password
    password:{
        width:'80%',
        height:40,
        borderWidth:1,
        borderColor:'#cccccc',
        borderRadius:5,
        marginBottom:20,
        paddingLeft:10
    },
    //styles pour button1
    button1:{  
        width:'80%',
        height:40,
        backgroundColor:'#0a2440',
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:10
    },
    //styles pour Login
    Login:{
        color:'#ffffff',
        fontSize:16,
        fontWeight:'bold'
    },

    

    //styles pour message
    message:{
        fontSize:14,
        color:'#666666',
        marginBottom:10
    },
    //styles pour button2
    button2:{
        width:'80%',
        height:40,
        backgroundColor:'#28a745',
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center'
    },

    //styles pour compte
    compte:{
        color:'#ffffff',
        fontSize:16,
        fontWeight:'bold'
    },

    //connexion style
    connexion:{
        fontSize:24,
        fontWeight:"bold",
        marginBottom:20,
    },
    //img style
    img:{
        width:100,
        height:100,
        borderRadius:100,
        marginLeft:10,
        marginTop:10,
        marginBottom:10,
    },

});