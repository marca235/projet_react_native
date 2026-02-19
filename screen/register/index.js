import { View,Text,StyleSheet,TouchableOpacity,TextInput,Image } from "react-native";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../outils/authContext";


const Register = ({ navigation }) => {

    const {register} = useContext(AuthContext);
    const [fullname, setfullName ] = useState(""); 
    const [email, setemail ]= useState(""); 
    const [password, setpassword] = useState(""); 
  return (
    <View style={styles.main}>

            <View style={styles.header}>
                <Image style={styles.img}source={require('./../../assets/Emetteur.jpg')}/>
            </View>
      <Text style={styles.connexion}>Fenetre d'inscription</Text>
      <View style={styles.container}>
        <TextInput placeholder="Your fullName" style={styles.fullname} onChangeText={setfullName} value={fullname}/>
        <TextInput placeholder="Your email" style={styles.email} onChangeText={setemail} value={email}/>
        <TextInput placeholder="Your password" keyboardType="numeric"style={styles.password} onChangeText={setpassword} value={password}/>

        
        <TouchableOpacity style={styles.button1} onPress={() => register(fullname,email,password)}>
            <Text style={styles.Login} >Inscrire</Text>
        </TouchableOpacity>
            <Text style={styles.message}>Vous avez deja un compte?</Text>
        <TouchableOpacity style={styles.button2} onPress={()=> navigation.navigate("Login")}>   
            <Text style={styles.compte}>Se connecter</Text>
        </TouchableOpacity>


        
      </View>

      
    </View>
  );
}

export default Register;

const styles = StyleSheet.create({

    //styles pour le main
    main:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ffffff',
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
    //styles pour fullname
    fullname:{
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