import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
import Setting from './setting';
// import Main from '../tabStack/main';
import HomeScreen from '../tabStack/bottomTab/homeScreen';
import Main from './../tabStack/main';
const DrawerIndex = () => {
  return (
    <Drawer.Navigator initialRouteName = "Main">
      <Drawer.Screen name="Main" component={Main} options={{headerShown:false}} />
      <Drawer.Screen name='Setting' component={Setting} options={{headerShown:true}} />
    </Drawer.Navigator>
  )
}

export default DrawerIndex