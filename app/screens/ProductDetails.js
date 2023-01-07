import React from 'react';
import { View, Text, StyleSheet, Image } from "react-native";
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';

import ProductsDetails from '../data/ProductsDetails';

function ProductDetails({ route }) {
    const listing = route.params;
    return (
        <View style={styles.container}>
            <Image source={listing.img} style={styles.img} resizeMode='center' />
            <View style={{ paddingLeft: 10, marginTop: 10 }}>
                <AppText title={listing.name} textsize={23} />
                <AppText title={'\u20B9' + listing.price} textsize={20} />
                <AppText title={listing.subtitle} textsize={20} />
                <View style={{ flexDirection: "row", justifyContent: "center" }}>
                    <AppButton title="Add To WishList" />
                    <AppButton title="Add To Cart" />

                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    img: {
        width: "100%",
        height: 300,

    },

    paragraph: {
        fontSize: 20,
        fontFamily: 'Roboto',
        marginTop: 10,


    },
    container: {
        flex: 1

    }

})

export default ProductDetails;