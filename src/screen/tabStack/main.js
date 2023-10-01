import { View, Text, StyleSheet, TouchableOpacity, Image, Keyboard } from 'react-native'
import React, { useEffect, useState } from 'react'
import HomeScreen from './bottomTab/homeScreen';
import SearchScreen from './bottomTab/searchScreen';
import WishListScreen from './bottomTab/wishListScreen';
import NotificationScreen from './bottomTab/notificationScreen';
import UserScreen from './bottomTab/userScreen';

const Main = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [isKeyBoardVisible, setIsKeyBoardVisible]= useState(0);
  useEffect(()=>{
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
          setIsKeyBoardVisible(true);
      },
  );
  const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setIsKeyBoardVisible(false);
      },
  );

  return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
  };
  }, []);
  return (
    <View style={styles.container}>
          {selectedTab==0?(<HomeScreen />):selectedTab==1?(<SearchScreen />):selectedTab==2?(<WishListScreen />):selectedTab==3?(<NotificationScreen />):<UserScreen />}
      {!isKeyBoardVisible && (<View style={styles.bottomView}>
         <TouchableOpacity style={styles.bottomTab} onPress={()=>{setSelectedTab(0)}}>
          <Image 
          source={selectedTab == "0"?require('../../components/images/home_fill.png'):require('../../components/images/home.png')}
          style={styles.bottomTabIcon}
          />
         </TouchableOpacity>
         <TouchableOpacity style={styles.bottomTab} onPress={()=>{setSelectedTab(1)}}>
          <Image 
          source={selectedTab == "1"?require('../../components/images/search_fill.png'):require('../../components/images/search.png')}
          style={styles.bottomTabIcon}
          />
         </TouchableOpacity>
         <TouchableOpacity style={styles.bottomTab} onPress={()=>{setSelectedTab(2)}}>
          <Image 
          source={selectedTab == "2"?require('../../components/images/wish_fill.png'):require('../../components/images/wish.png')}
          style={styles.bottomTabIcon}
          />
         </TouchableOpacity>
         <TouchableOpacity style={styles.bottomTab} onPress={()=>{setSelectedTab(3)}}>
          <Image 
          source={selectedTab == "3"?require('../../components/images/noti_fill.png'):require('../../components/images/noti.png')}
          style={styles.bottomTabIcon}
          />
         </TouchableOpacity>
         <TouchableOpacity style={styles.bottomTab} onPress={()=>{setSelectedTab(4)}}>
          <Image 
          source={selectedTab == "4"?require('../../components/images/user_fill.png'):require('../../components/images/user.png')}
          style={styles.bottomTabIcon}
          />
         </TouchableOpacity>
      </View>)}
       
    </View>
    
  )  
}

export default Main
 const styles = StyleSheet.create({
  container:{
    flex:1
  },
  bottomView:{
    position:'absolute',
    bottom:0,
    width:'100%',
    height:70,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff'
  },
  bottomTab:{
    width:'20%',
    height:'100%',
    justifyContent:'center',
    alignItems:'center',
  },
  bottomTabIcon:{
    width:24,
    height:24,
  }
 })