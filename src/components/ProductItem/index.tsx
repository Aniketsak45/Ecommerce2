import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image,Pressable,StyleSheet,Text, View,  } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";



interface ProductItemProps {

item : {

id: string;
title : string;
image : string;
avgRating : number;
ratings : number;
price : number;
oldPrice? : number;

};
}

export default function ProductItem({item}: ProductItemProps) {
    
  const navigation = useNavigation();
  const onPress = () => {

    navigation.navigate('ProductDetails');
  };

    return (
<Pressable onPress={onPress} style={Styles.root}>

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



</Pressable>

    );
  }




  const Styles = StyleSheet.create ({

   
    
    root :{

      flexDirection:'row',
      margin:10,
      borderWidth:1,
      borderRadius:10,
      backgroundColor:'#fff',
      marginVertical:5,

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

  });