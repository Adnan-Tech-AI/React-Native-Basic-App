import React, { useEffect, useState, useCallback } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';

import { useFocusEffect } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Card from '../components/Card';


function CartScreen(props) {
    const [cartItems, setCartItems] = useState([]);

    useFocusEffect(
        React.useCallback(() => {
            async function getCartData() {
                try {
                    const cartData = await AsyncStorage.getItem('UserCart');

                    // Parse the cart data and set it to the state
                    setCartItems(await JSON.parse(cartData));
                    console.log(cartItems.values)
                } catch (error) {
                    console.error(error);
                }
            }

            getCartData();
        }, [])
    );


    return (
        <View>
            <FlatList data={cartItems.values} keyExtractor={(item) => item.id} renderItem={({ item }) => <Card title={item.name} />} />
        </View>
    );
}


export default CartScreen;

const styles = StyleSheet.create({
    container: {

    }

})