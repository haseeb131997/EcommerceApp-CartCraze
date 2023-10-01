import { View, Text, StyleSheet, FlatList, Dimensions, Image, TouchableOpacity } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import Header from '../../../components/custom/header'
import {useNavigation } from '@react-navigation/native'
import {useDispatch} from 'react-redux'
import { addProducts } from '../../../app/redux/Slice/ProductsSlice'


const HomeScreen = () => {
    const navigation = useNavigation();
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();

    useEffect(()=>{
        getProducts();
    },[]) 

    const getProducts = () =>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
              setProducts(json);
              json.map(item=>{
                item.qty = 1;
              });
              dispatch(addProducts(json));            })
           
            
    }

// Renderring Products Items
const renderItem = useCallback(({item, index}) => {
  return(
      <TouchableOpacity activeOpacity={1} style={styles.productItem} onPress={() =>
        navigation.navigate("ProductDetailScreen", {
          data: item,
        })
      }>
          <Image
          source={{uri:item.image}}
          style={styles.imageStyle}
 
          />
          <View>
              <Text style={styles.nameStyle}>{item.title.length > 30?item.title.substring(0,30):item.title}</Text>
              <Text style={styles.discripStyle}>{item.description.length > 30?item.description.substring(0,40) + '...':item.discription}</Text>
              <Text style={styles.priceStyle}>{item.price} $</Text>

          </View>
          {/* <Text style={{color:'#000', fontWeight:'bold'}}>Description</Text>
          <Text>{item.description}</Text> */}
      </TouchableOpacity>
  )
})

// key extractor for unique key
const keyExtractor = useCallback((item)=>`${item.id}`)

// Items Seperators between products
// const itemSeparatorComponent = useCallback(()=>{
//   return(<View style={{height:20}}/>)
// }, [data])

// Pagination
// const onEndReached = () =>{
//   if(loadmore){
//       setShowLoader(true)
//       fetchData();
//   }
// }

// Loading Indicator
// const listFooterComponent = useCallback(()=>{
//   return(
//    <ActivityIndicator size="large" />
//   )
// }, [])
  return (
    <View style={styles.container}>
      <Header
      leftIcon={require('../../../components/images/menu.png')}
      rightIcon={require('../../../components/images/cart.png')}
      onClickLeftIcon={() => navigation.openDrawer()}
      isCart={true}
    //   title={'CartCraze'}
       />
       <FlatList 
        data ={products}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        />
    </View>
  )
}

export default HomeScreen
const styles = StyleSheet.create({
    container:{
      flex:1
    },
    productItem:{
      width: Dimensions.get('window').width,
      height: 100,
      marginTop:10,
      backgroundColor:'#ffff',
      flexDirection:'row',
      alignItems:'center'
    },
    imageStyle:{
      width:100,
      height:100
    },
    nameStyle:{
      fontSize:12,
      fontWeight:'600',
      marginLeft:20
    },
    priceStyle:{
      marginLeft:20,
      fontSize:20,
      color:'green'
    },
    discripStyle:{
      marginLeft:20,
    }
   })