import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import HomeStack from './HomeStack';
import ShoppingCatStack from './ShoppingCartStack';


const Tab = createBottomTabNavigator();
const BottomTabNav = () => {



return(


        <Tab.Navigator screenOptions={{tabBarShowLabel:false, inactiveTintColor:'#ffbd7d', activeTintColor:'#e47911', headerShown:false,}}>
    
         <Tab.Screen 
         component={HomeStack}
          name="home"
          screenOptions={{
            tabBarIcon:({color}) => (
                <Entypo name="home" color={color} size={18} />
            ),
          }}
            
          />
         <Tab.Screen component={HomeScreen} name="profile"
         screenOptions={{
            tabBarIcon:({color}) => (
                <AntDesign name="profile" color={color} size={25} />
            ),
          }}
         />
         <Tab.Screen component={ShoppingCatStack} name="shoppingCart"
         screenOptions={{
            tabBarIcon:({color}) => (
                <Feather name="shopping-cart" color={color} size={18} />
            ),
          }}
         />
         <Tab.Screen component={HomeScreen} name="more" 
         screenOptions={{
            tabBarIcon:({color}) => (
              <Entypo name="more" size={30} color="#900" />
            ),
          }}
          
         />

               
        </Tab.Navigator>



)

}



export default BottomTabNav;