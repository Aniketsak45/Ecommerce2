import React, { useState } from "react";
import { Image,StyleSheet,Text, View,  } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import QuantitySelector from "../QuantitySelector";


interface CartProductItemProps {

CartItem:{
id:string;
quantity:number;
option?:string;
item : {

id: string;
title : string;
image : string;
avgRating : number;
ratings : number;
price : number;
oldPrice? : number;

};
};
}

export default function CartProductItem({CartItem}: CartProductItemProps) {
    
  const {quantity: quantityProp, item} = CartItem;

  const [quantity, setQuantity] = useState(quantityProp);

    return (

<View style={Styles.root}>
<View style={Styles.row}>

<Image style={Styles.image} source={{uri: item.image}}/>

   <View style={Styles.rightContainer}>
     <Text style={Styles.title} numberOfLines={3}>{item.title}</Text>

     {/*Ratings */}
     <View style={Styles.ratingContainer}>

     {[0, 0, 0, 0, 0].map((el, i) => (
            <FontAwesome
              key={`${item.id}-${i}`}
              style={Styles.star}
              name={i < Math.floor(item.avgRating) ? 'star' : 'star-o'}
              size={18}
              color={'#e47911'}
            />
          ))}



    <Text>{item.ratings}</Text>

     </View>

     <Text style={Styles.price}>from ${item.price} {item.oldPrice && (<Text style={Styles.oldPrice}>$ {item.oldPrice}</Text>)}</Text>

   </View>



</View>
          <View style={Styles.quantityContainer}>
          <QuantitySelector quantity={quantity} setQuantity={quantity} />
          </View>
          

      </View>


    );
  }




  const Styles = StyleSheet.create ({

   
    
    root :{

      margin:10,
      borderWidth:1,
      borderRadius:10,
      backgroundColor:'#fff',
      marginVertical:5,
  

    },

    row:{
      flexDirection:'row',
    },

    image : {
      flex:2,
      height:150,
      resizeMode:'contain',
      borderRadius:10,
    },

    rightContainer:{

      padding:10,
      flex:3,
    },

    title : {

      fontSize:18,
      
    
    },

    ratingContainer: {

        flexDirection:'row',
        alignItems:'center',
        marginVertical:10,
    },

    star: {
        margin:3,
    },

    price: {
        fontSize:18,
        fontWeight:'bold'

    },

    oldPrice: {
          fontSize:12,
          fontWeight:'normal',
          textDecorationLine:'line-through',

    },

    quantityContainer:{
      marginVertical:10,
      marginLeft:10,

    },

  });