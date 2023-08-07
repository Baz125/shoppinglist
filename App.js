import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShoppingLists from './components/ShoppingLists';

const Stack = createNativeStackNavigator();

const App = () => {
  const firebaseConfig = {
  apiKey: "AIzaSyB35PnDm8te1b0TdhGOeynrcRKN2kemuSA",
  authDomain: "listapp-92a14.firebaseapp.com",
  projectId: "listapp-92a14",
  storageBucket: "listapp-92a14.appspot.com",
  messagingSenderId: "147914270614",
  appId: "1:147914270614:web:f8ace1a23c69357a0fdfb7",
  measurementId: "G-JFFXHS4VRH"
  };
  
  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ShoppingLists"
      >
        <Stack.Screen
          name="ShoppingLists"
          // component={ShoppingLists}
        >
          {props => <ShoppingLists db={db} {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App;