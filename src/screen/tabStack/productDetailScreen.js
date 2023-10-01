import { View, Image, StyleSheet, Text, TouchableOpacity, Dimensions, Alert } from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/custom/header';
import { useNavigation } from '@react-navigation/native';
import CustomButton from './../../components/custom/customButton';
import { useDispatch } from 'react-redux';
import { addItemToWishList } from '../../app/redux/Slice/WishListSlice';
import { addItemToCart } from '../../app/redux/Slice/CartSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProductDetailScreen = props => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { data } = props.route.params;
  const [qty, setQty] = useState(1);
  const checkUserStatus = async () => {
    const status = await AsyncStorage.getItem('IS_USER_LOGGED_IN');
    if (status == null) {
      Alert.alert('please log in')
    } else {
      dispatch(
        addItemToCart(data))
    }
  };


  //   const offerPrice = (data.price - data.price*data.discountPercentage/100);
  return (
    <View style={styles.container}>
      <Header
        leftIcon={require('./../../components/images/back.png')}
        rightIcon={require('./../../components/images/cart.png')}
        title={"Product Details"}
        onClickLeftIcon={() => navigation.goBack()}
        onClickRightIcon={() => { }}
        isCart={true}
      />
      <Image source={{ uri: data.image }} style={styles.imageStyle} />
      <View>
        <Text style={styles.titleStyle}>{data.title}</Text>
        <Text style={styles.textStyle}>Rating : {data.rating.rate}</Text>
        <Text style={styles.textStyle}>Stock : {data.rating.count}</Text>
        <Text style={styles.discStyle}>Discription : {data.description}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
          <Text style={{ color: '#000', marginLeft: 20 }}>Price : </Text>
          <Text style={styles.priceStyle}> ${data.price}</Text>
        
        </View>
      </View>
      <TouchableOpacity style={styles.wishListBtn} onPress={() => {
        dispatch(addItemToWishList(data))
      }}>
        <Image style={styles.icon} source={require('../../components/images/wish.png')} />
      </TouchableOpacity>

      <CustomButton bg={'blue'} title={'Add To Cart'} color={'#ffff'} width={Dimensions.get('window').width - 40}
        onPress={() => {
          // console.log(data)
          dispatch(addItemToCart(data))
          // checkUserStatus();
        }} />
    </View>
  )
}
const styles = StyleSheet.create({
  imageStyle: {
    borderRadius: 8,
    width: "100%",
    height: 300,
    resizeMode: "center"
  },
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  titleStyle: {
    marginTop: 10,
    marginLeft: 20,
    fontSize: 20,
    fontWeight: "bold",
    color: "#000"
  },
  priceStyle: {
    color: 'green',
    fontSize: 18,
  },
  discStyle: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    color: "#000"
  },
  textStyle: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    color: "#000"
  },
  wishListBtn: {
    position: 'absolute',
    right: 20,
    top: 100,
    backgroundColor: 'grey',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
  qtyView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 16
  },
  buttonStyle: {
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderRadius: 10,
    marginLeft: 10
  },
  qty: {
    marginLeft: 10,
    fontSize: 18
  }

})

export default ProductDetailScreen;