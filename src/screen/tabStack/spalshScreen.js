import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import {useNavigation} from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(()=>{
    setTimeout(()=>{
      checkLogin();
    }, 2000)
  },[])

  const checkLogin = async()=>{
    const email= await AsyncStorage.getItem('EMAIL');
    if(email !== null || email !== undefined || email !== ''){
      navigation.navigate('DrawerIndex')
    } else{
      navigation.navigate('LoginScreen')
    }
  }
  return (
    <View style={styles.page}> 
     <View>
        <Text style={styles.logo}>Cart Craze</Text>
     </View>
    </View>
  )
}

export default SplashScreen
const styles = StyleSheet.create({
    page:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#2628A5"
    },
    logo:{
        fontSize:24,
        color:"#ffff",
        fontWeight:'800',
    },
    logoContainer:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#2628A5",
        width:200,
        height:200,
    },
})