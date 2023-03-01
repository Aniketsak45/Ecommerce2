import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import BottomTabNav from './bottomTabNav';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductScreen from '../screens/ProductScreen';


const Stack = createStackNavigator();
const HomeStack = () => {



return(

        <Stack.Navigator>

         <Stack.Screen component={HomeScreen } name="HomeScreen" options={{title:'Home'}} />
         <Stack.Screen component={ProductScreen } name="ProductDetails" />       

        </Stack.Navigator>

)

};



export default HomeStack;