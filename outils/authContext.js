import { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

const KEY_STORAGE_USER = '@user';

export const AuthProvider = ({ children }) => {  // Correction du nom
    const [user, setUser] = useState(null);

    const register = async (fullname, email, password, navigation) => {
        fullname = fullname.trim();
        email = email.trim();
        password = password.trim();

        if (!fullname || !email || !password) {
            alert("Remplir tous les champs");
            return;
        }

        try {
            const storedUser = await AsyncStorage.getItem(KEY_STORAGE_USER);
            if (storedUser) {
                const parsedUser = JSON.parse(storedUser);
                if (parsedUser.email === email) {  // Vérification par email
                    alert("L'utilisateur existe déjà");
                    return;
                }
            }

            const newUser = {
                id: Date.now().toString(),
                fullname,
                email,
                password,  // Note : Hasher en production
            };

            await AsyncStorage.setItem(KEY_STORAGE_USER, JSON.stringify(newUser));
            setUser(newUser);
            alert("Enregistrement réussi avec succès");
            if (navigation) {
                navigation.navigate("login");
            }
        } catch (error) {
            alert("Erreur lors de l'enregistrement");
            console.error(error);
        }
    };

    return (
        <AuthContext.Provider value={{ register }}>
            {children}
        </AuthContext.Provider>
    );
};
