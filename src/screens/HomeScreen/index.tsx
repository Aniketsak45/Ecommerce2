import React from "react";
import { View,Text, StyleSheet, Image, FlatList } from "react-native";
import ProductItem from "../../components/ProductItem";
//import ProductItem from "../../components/ProductItem";
//import ProductItems from "../../components/ProductItems";
import products from "../../data/products";






export default function HomeScreen() {
    return (
      <View style={Styles.page} >

          {/* Render products components */}
         
          <FlatList 
          
          data={products}
          renderItem={({item}) => <ProductItem item={item} />}
          showsVerticalScrollIndicator={false}
          
          
          />
    

      </View>
    );
  }
  

  const Styles = StyleSheet.create ({

    page: {

      width:'100%',
      padding:10,
    },
    
   

  });