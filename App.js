import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './routes';
import { AuthProvider } from './outils/authContext';



export default function App() {
  return (
    <AuthProvider>
      <Routes/>
    </AuthProvider>
  );

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cd1212ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
