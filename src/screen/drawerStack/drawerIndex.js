import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
// import Home from '../tabStack/home';
import Setting from './setting';
import Main from '../tabStack/main';
const DrawerIndex = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Main" component={Main} options={{headerShown:false}} />
      <Drawer.Screen name='Setting' component={Setting} options={{headerShown:true}} />
    </Drawer.Navigator>
  )
}

export default DrawerIndex