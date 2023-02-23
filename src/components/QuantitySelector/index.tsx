import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";



/*export default function  QuantitySelector = ({quantity, setQuantity}) => {

const onMinus = () => {
setQuantity(Math.max(0, quantity - 1));

};


const onPlus = () => {

setQuantity(quantity + 1);

};*/

const QuantitySelector = ({quantity, setQuantity}) => {
    const onMinus = () => {
      setQuantity(Math.max(0, quantity - 1));
    };
  
    const onPlus = () => {
      setQuantity(quantity + 1);
    };

return (

<View style={Styles.root}>

< Pressable onPress={onMinus} style={Styles.button}>
<Text style={Styles.buttonText}>-</Text>
</Pressable>

<Text style={Styles.quantity}>{quantity}</Text>

< Pressable onPress={onPlus} style={Styles.button}>
<Text style={Styles.buttonText}>+</Text>
</Pressable>

</View>

);
};


const Styles = StyleSheet.create({

root :{

flexDirection:'row',
alignItems:'center',
justifyContent:'space-between',
borderWidth:1,
borderColor:'#e3e3e3',
width:130,
},

button : {
width:35,
height:35,
alignItems:'center',
justifyContent:'center',
backgroundColor:'#d1d1d1'

},

buttonText : {
fontSize:18,
},

quantity: {

color:'#097eb9'
},


});


export default QuantitySelector;