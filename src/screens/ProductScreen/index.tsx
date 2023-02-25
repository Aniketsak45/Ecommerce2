import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import product from "../../data/product";
import {Picker} from "@react-native-picker/picker"; 
import QuantitySelector from "../../components/QuantitySelector";
import Button from "../../components/Button";
import ImageCarousel from "../../components/ImageCarousel";


export default function ProductScreen() {

    const[selectedOption, setSelectedOption] = useState(product.options?  product.options[0] : null);
    const [quantity, setQuantity] = useState(1);
    
return (
<ScrollView style={Styles.root}>
<Text style={Styles.title}>{product.title}</Text>


{/*Image Coursel */}

<ImageCarousel images={product.images} />


{/*Option Selector */}

<Picker
selectedValue={selectedOption}
onValueChange={(itemValue => setSelectedOption(itemValue))}
>

{product.options.map(option => (<Picker.Item label={option} value={option}/> ))}

</Picker>


{/*Price */}

<Text style={Styles.price}>from ${product.price} {product.oldPrice && (<Text style={Styles.oldPrice}>$ {product.oldPrice}</Text>)}</Text>


{/*Description */}

<Text style={Styles.description}>{product.description}</Text>

{/*Quantity Selector*/}

<QuantitySelector  quantity={quantity}  setQuantity={setQuantity}/>


{/*Button */}

<Button text={'Add To Cart'}
onPress={() => {
    console.warn('Add to cart');

}}

containerStyles = {{backgroundColor:'#e3c905'}}

/>


<Button text={'Buy Now'}
onPress={() => {
    console.warn('Buy now');
}}

/>

</ScrollView>


);



};




const Styles = StyleSheet.create({
    root:{

        padding:10,
        backgroundColor:'white',

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

    title :{
            fontSize:16,
    },

    description:{
            marginVertical:10,
            lineHeight:20,
    },


});