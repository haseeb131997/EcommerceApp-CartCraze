import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Main from './tabStack/main';
import DrawerIndex from './drawerStack/drawerIndex';
import ProductDetailScreen from './tabStack/productDetailScreen';
import cartScreen from './tabStack/cartScreen';
import SplashScreen from './tabStack/spalshScreen';
import LoginScreen from './tabStack/loginScreen';
import SignUpScreen from './tabStack/signUpScreen';
const stack = createNativeStackNavigator();
const AppIndex = () => {
  return (
   <NavigationContainer initialRouteName = "SplashScreen">
    <stack.Navigator>

        {/* <stack.Screen name='SplashScreen' component={SplashScreen} options={{headerShown:false}} />
        <stack.Screen name='LoginScreen' component={LoginScreen} options={{headerShown:false}} /> */}
        <stack.Screen name='SignUpScreen' component={SignUpScreen} options={{headerShown:false}} />
        <stack.Screen name='DrawerIndex' component={DrawerIndex} options={{headerShown:false}} />
        {/* <stack.Screen name='Main' component={Main} options={{headerShown:false}} /> */}
        <stack.Screen name='ProductDetailScreen' component={ProductDetailScreen} options={{headerShown:false}} />
        <stack.Screen name='CartScreen' component={cartScreen} options={{headerShown:false}} />        
    </stack.Navigator>
   </NavigationContainer>
  )
}

export default AppIndex