import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import Card from '../components/Card';

import AsyncStorage from '@react-native-async-storage/async-storage';

import ProductsDetails from '../data/ProductsDetails';

function Products({navigation, route}) {
  const [selectedItem, setSelectedItem] = useState({});
  const [user, setUser] = useState({});

  const listing = route.params;

  const selectedObjects = ProductsDetails.filter(
    obj => obj.subcategory === listing.value,
  );

  const handleCart = async values => {
    try {
      const data = await AsyncStorage.getItem('UserCart');
      const parseData = JSON.parse(data);

      if (parseData) {
        let arr = [...parseData];
        arr.push(values);

        await AsyncStorage.setItem('UserCart', JSON.stringify(arr));
      } else {
        await AsyncStorage.setItem('UserCart', JSON.stringify([values]));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FlatList
      data={selectedObjects}
      keyExtractor={data => data.id}
      renderItem={({item}) => (
        <Card
          title={item.name}
          price={item.price}
          image={item.img}
          onPress={() => navigation.navigate('Product Details', item)}
          handleCart={() => handleCart(item)}
        />
      )}
    />
  );
}

export default Products;

const styles = StyleSheet.create({
  container: {},
});
