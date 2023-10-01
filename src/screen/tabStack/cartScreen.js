import { View, StyleSheet, Text, FlatList, Dimensions, TouchableOpacity, Image, Button } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/custom/header';
import { addItemToCart, reduceItemFromCart, removeItemFromCart } from '../../app/redux/Slice/CartSlice';

const CartScreen = () => {
    const navigation = useNavigation();
    const items = useSelector(state => state.cart);
    const [cartItems, setCartItems] = useState([])
    const dispatch = useDispatch();
    useEffect(()=>{
        setCartItems(items.data)
    },[items])
    // console.log(JSON.stringify(items) +"total length of data =="+ items.data.length);

    // Renderring Products Items
    const renderItem = useCallback(({ item, index }) => {
        return (
            <TouchableOpacity activeOpacity={1} style={styles.productItem} onPress={() =>
                navigation.navigate("ProductDetailScreen", {
                    data: item,
                })
            }>
                <Image
                    source={{ uri: item.image }}
                    style={styles.imageStyle}

                />
                <View>
                    <Text style={styles.nameStyle}>{item.title.length > 30 ? item.title.substring(0, 30) : item.title}</Text>
                    <Text style={styles.discripStyle}>{item.description.length > 30 ? item.description.substring(0, 40) + '...' : item.discription}</Text>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.priceStyle}>{item.price} $</Text>
                        <TouchableOpacity style={styles.buttonStyle} onPress={()=>{
                            dispatch(addItemToCart(item))
                        }}>
                            <Text style={{fontSize:16, fontWeight:'600'}}>+</Text>
                        </TouchableOpacity>
                            <Text style={styles.qty}>{item.qty}</Text>
                        <TouchableOpacity style={styles.buttonStyle} onPress={()=>{
                            if(item.qty>1){
                                dispatch(reduceItemFromCart(item))
                            }else{
                                dispatch(removeItemFromCart(index))
                            }
                        }}>
                            <Text style={{fontSize:16, fontWeight:'600'}}>-</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                {/* <Text style={{color:'#000', fontWeight:'bold'}}>Description</Text>
          <Text>{item.description}</Text> */}
            </TouchableOpacity>
        )
    })
    
    return (
        <View style={styles.container}>
            <Header
                leftIcon={require('../../components/images/back.png')}
                onClickLeftIcon={() => navigation.goBack()}
                title={'Cart'}
            />
            <FlatList
                data={cartItems}
                renderItem={renderItem}
                onClickLeftIcon={() => navigation.goBack()}
            />
        </View>
    )
}

export default CartScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    productItem: {
        width: Dimensions.get('window').width,
        height: 100,
        marginTop: 10,
        backgroundColor: '#ffff',
        flexDirection: 'row',
        alignItems: 'center'
    },
    imageStyle: {
        width: 100,
        height: 100
    },
    nameStyle: {
        fontSize: 12,
        fontWeight: '600',
        marginLeft: 20
    },
    priceStyle: {
        marginLeft: 20,
        fontSize: 20,
        color: 'green'
    },
    discripStyle: {
        marginLeft: 20,
    },
    qtyview:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:10
    },
    buttonStyle: {
        width: 25,
        height:25,
        justifyContent:'center',
        alignItems: 'center',
        borderWidth:0.5,
        borderRadius:10,
        marginLeft:10
    },
    qty:{
        marginLeft:10,
        fontSize:18
    }
})