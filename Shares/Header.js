import React from 'react';
import { StyleSheet,Image, SafeAreaView,View } from 'react-native';



const Header = () => {
    return(
        <SafeAreaView style={styles.header}>
            <Image
                    source= {require("../assets/logo1.png")}
                    resizeMode="contain"
                    style={{height: 100}}

                    />    
           </SafeAreaView>


    )
        }
        const styles = StyleSheet.create({
            header:{
                width: "100%",
                flexDirection : 'row',
                alignContent : "center",
                justifyContent : "center",            
                paddingTop:50
               
            }
        })
export default Header;