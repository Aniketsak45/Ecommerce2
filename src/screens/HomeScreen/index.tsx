import React from "react";
import { View,Text, StyleSheet, Image, FlatList } from "react-native";
import ProductItem from "../../components/ProductItem";
//import ProductItem from "../../components/ProductItem";
//import ProductItems from "../../components/ProductItems";
import products from "../../data/products";






const HomeScreen = ({searchValue}: {searchValue:string}) =>  {

    console.log(searchValue);
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


  export default HomeScreen;