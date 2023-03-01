import React from "react";
import { View,Text, StyleSheet, Image, FlatList } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import CartProductItem from "../../components/CartProductItem";
import Button from "../../components/Button";

import products from "../../data/cart";
import { useNavigation } from "@react-navigation/native";






export default function ShoppingCartScreen() {
  const totalPrice = products.reduce((summedPricce, product) => 
  summedPricce + product.item.price * product.quantity,0,
  );
  
  
  const navigation = useNavigation();
  const onCheckout = () => {

    navigation.navigate('Address');
  }

  
  return (
      <View style={Styles.page} >




          {/* Render products components */}
         
          <FlatList 
          
          data={products}
          renderItem={({item}) => <CartProductItem CartItem={item} />}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => (

            <View>

            <Text style={{fontSize:18}}>
              Subtotal ({products.length} items):{''} <Text style={{color:'#e47911'}}>
              ${totalPrice.toFixed(2)}
              </Text>
            </Text>
  
            <Button  text="Proceed to checkout" onPress={onCheckout } />
            
          </View>
            
            
          )}
          
          />
    

      </View>
    );
  }
  

  const Styles = StyleSheet.create ({

    page: {

      width:'100%',
      padding:10,
    },
    
   buttonText:{
    backgroundColor:'#f7e300',
   },

  });