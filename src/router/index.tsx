import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import BottomTabNav from './bottomTabNav';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductScreen from '../screens/ProductScreen';


const Root = createStackNavigator();
const Router = () => {



return(

        <NavigationContainer>
            <Root.Navigator screenOptions={{headerShown:false}}>
            <Root.Screen component={BottomTabNav } name="Home-Tab" />
            </Root.Navigator>
      
        </NavigationContainer>

)

};



export default Router;