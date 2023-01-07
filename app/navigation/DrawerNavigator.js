import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';

// Importing Screens

import Home from '../screens/Home';
import Products from '../screens/Products';
import ProductCategory from '../screens/ProductCategory';
import Ionicons from 'react-native-vector-icons/Ionicons';


//Importing Navigation
import FeedNavigator from './FeedNavigator';
import MyIcon from '../components/MyIcon';
import SignIn from '../screens/SignIn';

const Drawer = createDrawerNavigator();

const DrawerNavigator = ({ navigation }) => (
    <Drawer.Navigator screenOptions={{ headerRight: () => <View style={{ flexDirection: "row", margin: 5 }}><MyIcon name={'cart-outline'} onPress={() => navigation.navigate("cart")} /><Ionicons name={'heart-outline'} size={30} color={"black"} /></View> }}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Category" component={FeedNavigator} />
    </Drawer.Navigator>
);

export default DrawerNavigator;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconContainer: {
        paddingLeft: 20, paddingTop: 10, marginRight: 5
    }
})