import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import ListCard from '../components/ListCard';

import CategoriesData from '../data/CategoriesData';

function ProductCategory({ navigation }) {
    return (
        <FlatList data={CategoriesData} keyExtractor={(data) => data.id}
            renderItem={({ item }) => <ListCard title={item.category} onPress={() => navigation.navigate("Product Sub Category", item)} />} />

    );
}


export default ProductCategory;

const styles = StyleSheet.create({
    container: {

    }

})