import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity, FlatList, Dimensions, Keyboard } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import Header from '../../../components/custom/header'
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const SearchScreen = () => {
  const products = useSelector(state => state.product);
  const [search, setSearch] = useState('');
  const [oldData, setOldData] = useState(products.data);
  const [searchedList, setSearchedList] = useState([]);

  const filterData = (txt) => {
    let newData = oldData.filter(item => {
      return item.title.toLowerCase().match(txt.toLowerCase())
    });
    setSearchedList(newData);
  };
  const navigation = useNavigation();

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
              <Text style={styles.priceStyle}>${item.price}</Text>

          </View>
      </TouchableOpacity>
  )
})

  return (
    <View style={styles.container}>
      {/* <Header
        title={'Search Items'}
      /> */}
      <View style={styles.searchView}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={require('../../../components/images/search.png')} style={styles.icon} />
          <TextInput 
            value={search}
            onChangeText={txt => {
              setSearch(txt);
              filterData(txt);
            }}
            placeholder='Search items here..'
            style={styles.input}
          />
        </View>
        {search !== '' && (
          <TouchableOpacity 
          style={{ justifyContent: 'center', alignItems: 'center' }}
          onPress={()=>{
            setSearch('');
            filterData('');
          }}
          >
            <Image source={require('../../../components/images/close.png')} style={{ width: 16, height: 16, resizeMode: 'center' }} />
          </TouchableOpacity>
        )}
      </View>
      <FlatList 
        data={searchedList}
        renderItem={renderItem}
        />
    </View>
  )
}

export default SearchScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff'
  },
  searchView: {
    width: '90%',
    height: 50,
    borderRadius: 20,
    borderWidth: 0.5,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  icon: {
    width: 28,
    height: 28,
    resizeMode: 'center'
  },
  input: {
    width: "60%",

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