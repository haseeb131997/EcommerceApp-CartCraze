import { View, StyleSheet, Text } from 'react-native'
import React from 'react'
import Header from '../../../components/custom/header'

const NotificationScreen = () => {
  return (
    <View style={styles.container}>
      <Header 
      leftIcon={require('../../../components/images/menu.png')}
      rightIcon={require('../../../components/images/cart.png')}
    //   title={'CartCraze'}
       />
       <Text>NotificationScreen</Text>
    </View>
  )
}

export default NotificationScreen
const styles = StyleSheet.create({
    container:{
      flex:1
    },
   })