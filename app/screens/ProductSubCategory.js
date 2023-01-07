import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';

import ListCard from '../components/ListCard';

import CategoriesData from '../data/CategoriesData';

function ProductSubCategory({ route, navigation }) {
    const listing = route.params;
    // console.log(listing.category)
    return (
        <View style={{ flex: 1 }}>
            <FlatList data={listing.subcategory} keyExtractor={(data) => data.key}
                renderItem={({ item }) => <ListCard title={item.value} onPress={() => navigation.navigate("Products", item)} />} />
        </View>
    );
}


export default ProductSubCategory;

const styles = StyleSheet.create({
    container: {

    }

})