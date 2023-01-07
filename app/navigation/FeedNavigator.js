import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importing Screens

import Products from "../screens/Products";
import ProductDetails from "../screens/ProductDetails";
import ProductCategory from "../screens/ProductCategory";
import ProductSubCategory from "../screens/ProductSubCategory";

const Stack = createNativeStackNavigator();

const FeedNavigator = () => (
    <Stack.Navigator initialRouteName="Product Category">
        <Stack.Screen name='Product Category' component={ProductCategory} />
        <Stack.Screen name='Product Sub Category' component={ProductSubCategory} />
        <Stack.Screen name='Products' component={Products} />
        <Stack.Screen name='Product Details' component={ProductDetails} />
    </Stack.Navigator>
);

export default FeedNavigator;