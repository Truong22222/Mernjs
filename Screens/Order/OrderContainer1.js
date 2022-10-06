import React from 'react';
import {View ,Text,StyleSheet,Dimensions,SafeAreaView,Button } from "react-native";

var {height} = Dimensions.get("window");
const OrderContainer =()=>{
            return (
                <SafeAreaView style={styles.container}>
                    <View>
                        <Text>Vui lòng chọn ước tính chính xác kích thước phòng bạn cần dọn dẹp !</Text>
                    </View>
                    <View>
                         <Text style={styles.title}>
                            Phòng 30m2
                        </Text>
                        <Button title="Add"/>
                    </View>         
                    <View>
                         <Text style={styles.title}>
                            Phòng 40m2
                        </Text>
                        <Button title="Add"/>
                    </View>    
                    <View>
                         <Text style={styles.title}>
                            Phòng 50m2
                        </Text>
                        <Button title="Add"/>
                    </View>    
                </SafeAreaView>  
)
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 16,
    },
     title: {
        textAlign: 'center',
        marginVertical: 8,
  },
    }
  
)


export default OrderContainer;