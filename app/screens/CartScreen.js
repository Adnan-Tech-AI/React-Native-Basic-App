import React, {useEffect, useState, useCallback} from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';

import {useFocusEffect} from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Card from '../components/Card';

function CartScreen(props) {
  const [cartItems, setCartItems] = useState();

  useFocusEffect(
    React.useCallback(() => {
      async function getCartData() {
        try {
          const cartData = await AsyncStorage.getItem('UserCart');
          const parseData = JSON.parse(cartData);
          console.log('cart data: ', parseData);
          if (parseData) {
            setCartItems(parseData);
            console.log(parseData);
          }
        } catch (error) {
          console.error(error);
        }
      }

      getCartData();
    }, []),
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <Card
            key={index}
            title={item.name}
            price={item.price}
            image={item.img}
          />
        )}
      />
    </View>
  );
}

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: '3%',
  },
});
