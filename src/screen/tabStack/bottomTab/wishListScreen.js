import { View, StyleSheet, Text, FlatList, Dimensions, TouchableOpacity, Image} from 'react-native'
import React, { useCallback, useState } from 'react'
// import Header from '../../../components/custom/header'
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Header from './../../../components/custom/header';

const WishListScreen = () => {
  const navigation = useNavigation();
  const items = useSelector(state=>state.wishlist);
  const [wishListItems, setWishListItems] = useState(items.data)
  // console.log(JSON.stringify(items) +"total length of data =="+ items.data.length);

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

  return (
    <View style={styles.container}>
      <Header 
      leftIcon={require('../../../components/images/back.png')}
      rightIcon={require('../../../components/images/cart.png')}
      title={'Wish List'}
       />
       <FlatList 
        data ={wishListItems}
        renderItem={renderItem}
        />
    </View>
  )
}

export default WishListScreen
const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#fff'
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