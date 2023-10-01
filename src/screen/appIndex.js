import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Main from './tabStack/main';
import DrawerIndex from './drawerStack/drawerIndex';
import ProductDetailScreen from './tabStack/productDetailScreen';
import cartScreen from './tabStack/cartScreen';
const stack = createNativeStackNavigator();
const AppIndex = () => {
  return (
   <NavigationContainer>
    <stack.Navigator>
        {/* <stack.Screen name='Main' component={Main} options={{headerShown:true}} /> */}
        <stack.Screen name='DrawerIndex' component={DrawerIndex} options={{headerShown:false}} />
        <stack.Screen name='ProductDetailScreen' component={ProductDetailScreen} options={{headerShown:false}} />
        <stack.Screen name='CartScreen' component={cartScreen} options={{headerShown:false}} />
    </stack.Navigator>
   </NavigationContainer>
  )
}

export default AppIndex