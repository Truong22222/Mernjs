import React,{useEffect, useState} from "react";
import {View ,Text,StyleSheet ,Activities,Container, Header,FlatList} from "react-native"
// import { Container, Header, Icon, Item, Input } from "native-base";



import ProductList from './ProductList';
import ProductCard from './ProductCard';
import Banner from '../../Shares/Banner';
const data = require('../../assets/data/products.json');



const ProductContainer = ()=> {
        const [products,setProduct]= useState([]);
        useEffect(() => {
            setProduct(data)
            return()=> {
                    setProduct([])
            }
            


        },[])
    return(
      <View style={styles.container}>
        <Text style={styles.text}> XIN CHÀO ĐẾN VỚI SOUJI !!! </Text>
        <View style={{marginTop: 30, marginLeft : 10}}>
        <FlatList                    
            data={products}
            numColumns={2}
            renderItem={({item}) => <ProductList
            key={item.brand}
            item={item}/>}
            keyExtractor={item => item.brand}
        />
        </View>
       
    </View>

    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "gainsboro",
    },
    text:{
      fontSize :20,
     
      fontWeight : "bold",
    }
    // listContainer: {
    //   height: height,
    //   flex: 1,
    //   flexDirection: "row",
    //   alignItems: "flex-start",
    //   flexWrap: "wrap",
    //   backgroundColor: "gainsboro",
    // },
    // center: {
    //     justifyContent: 'center',
    //     alignItems: 'center'
    // }
  });
export default ProductContainer;