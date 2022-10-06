import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,View}  from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { NativeBaseConfigProvider } from 'native-base';

import Header from './Shares/Header';
import ProductContainer from './Screens/Products/ProductContainer';

// import {Login2}  from './User/Login2';
import Login from './User/Login';
import OrderContainer1 from './Screens/Order/OrderContainer1'
import Register from "./User/Register";


export default function App() {
  return (
    <View>
      <View style={styles.container}>
              {/* <Header/> */}
              <OrderContainer1/>
              {/* <Main /> */}
              </View>
    </View>  
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
