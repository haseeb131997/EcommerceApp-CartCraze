import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({bg, title, onClick, color, width}) => {
  return (
    <TouchableOpacity activeOpacity={1} style={[styles.btn,{backgroundColor:bg, width:width}]} onPress={()=>{
      onClick();
    }}>
      <Text style={{color: color, fontSize:18, fontWeight:'500'}}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton;
const styles = StyleSheet.create({
    btn:{
        height:50,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        borderRadius:8,
        marginTop:30,
    }
})