import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import Header from './Shares/Header';
import ProductContainer from './Screens/Products/ProductContainer';
import Main from './Navigators/Main'

export default function App() {
  return (
    <NavigationContainer>
        <View style={styles.container}>
         <Header/>
         <Main />
         </View>
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
