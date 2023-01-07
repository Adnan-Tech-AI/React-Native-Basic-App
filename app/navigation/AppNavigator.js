import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importing Screens

import CartScreen from "../screens/CartScreen";
import WishList from "../screens/WishList";
import DrawerNavigator from "./DrawerNavigator";

const Stack = createNativeStackNavigator();

const AppNavigator = () => (
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name='Home' component={DrawerNavigator} options={{ headerShown: false }} />
        <Stack.Screen name='cart' component={CartScreen} />
        <Stack.Screen name='wishlist' component={WishList} />
    </Stack.Navigator>
);

export default AppNavigator;