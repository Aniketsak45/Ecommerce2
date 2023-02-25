import React from "react";
import { useState, useCallback } from "react";
import { View, Text, FlatList, StyleSheet, Image, useWindowDimensions, ScrollView } from "react-native";




const ImageCarousel = ({images}: {images: string[]}) => {
    const windowWidth = useWindowDimensions().width;
    const [activeIndex, setActiveIndex] = useState(0);
    const onFlatlistUpdate = useCallback(({viewableItems}) => {
        if (viewableItems.length > 0) {
          setActiveIndex(viewableItems[0].index || 0);
        }
        console.log(viewableItems);
      }, []);
return (
<View style={Styles.root}>
    
<FlatList 

data={images}
renderItem={({item}) => (

    <Image style={[Styles.image, {width: windowWidth - 40}]}
    source={{uri: item}} />
    
    
)}

horizontal
showsHorizontalScrollIndicator={false}
snapToInterval={windowWidth - 20}
snapToAlignment={'center'}
decelerationRate={"fast"}
viewabilityConfig={{

    viewAreaCoveragePercentThreshold:50,
}}
onViewableItemsChanged={onFlatlistUpdate}

/>

<View style={Styles.dots}>
        {images.map((image, index) => (
          <View
            style={[
              Styles.dot,
              {
                backgroundColor: index === activeIndex ? '#c9c9c9' : '#ededed',
              },
            ]}
          />
        ))}
      </View>

</View>


);
}


const Styles = StyleSheet.create({

root:{

},

image:{
margin:10,    
height:250,
resizeMode:'contain',
},

dots:{
flexDirection:'row',
justifyContent:'center',

},
dot:{
width:10,
height:2,
borderRadius:1,
borderColor:'#c9c9c9',
margin:5,

},

})




export default ImageCarousel;