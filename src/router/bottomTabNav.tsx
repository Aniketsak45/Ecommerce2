import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import HomeStack from './HomeStack';
import ShoppingCatStack from './ShoppingCartStack';
import Entype from 'react-native-vector-icons/Entypo';


const Tab = createBottomTabNavigator();
const BottomTabNav = () => {



return(


        <Tab.Navigator screenOptions={{tabBarShowLabel:false, inactiveTintColor:'#ffbd7d', activeTintColor:'#e47911', headerShown:false,}}>
    
         <Tab.Screen 
         component={HomeStack}
          name="home"
          Options={{
            tabBarIcon:({color:string}) => (
                <Entype name="home" color={color} size={18} />
            ),
          }}
            
          />
         <Tab.Screen component={HomeScreen} name="profile"
         screenOptions={{
            tabBarIcon:({color}) => (
                <Entype name="profile" color={color} size={25} />
            ),
          }}
         />
         <Tab.Screen component={ShoppingCatStack} name="shoppingCart"
         screenOptions={{
            tabBarIcon:({color}) => (
                <Entype name="shopping-cart" color={color} size={18} />
            ),
          }}
         />
         <Tab.Screen component={HomeScreen} name="more" 
         screenOptions={{
            tabBarIcon:({color}) => (
              <Entype name="more" size={30} color="#900" />
            ),
          }}
          
         />

               
        </Tab.Navigator>



)

}



export default BottomTabNav;