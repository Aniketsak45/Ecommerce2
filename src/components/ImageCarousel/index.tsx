import React from "react";
import { View, Text, FlatList, StyleSheet, Image, useWindowDimensions } from "react-native";




const ImageCarousel = ({images}: {images: string[]}) => {
    const windowWidth = useWindowDimensions().width;

return (
<View style={Styles.root}>
    
<FlatList 

data={images}
renderItem={({item}) => (

    <Image style={[Styles.image, {width: windowWidth - 40}]}
    source={{uri: item}} />
    
    
)}

horizontal

/>

</View>


);
}


const Styles = StyleSheet.create({

root:{

},

image:{
height:100,
resizeMode:'contain',
},


})




export default ImageCarousel;