import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const MyCard = ({ product, onAddToCart, onAddToWishlist, image }) => {
    return (
        <View style={styles.container}>
            <Image source={image} style={styles.image} />
            <Text style={styles.price}>{product.price}</Text>
            <TouchableOpacity style={styles.addToCartButton} onPress={() => onAddToCart(product)}>
                <Text>Add to Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.addToWishlistButton} onPress={() => onAddToWishlist(product)}>
                <Text>Add to Wishlist</Text>
            </TouchableOpacity>
            <Text style={styles.description}>{product.description}</Text>
        </View>
    );
};

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: 'gray',
        height: 250
    },
    image: {
        width: 200,
        height: 200,
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    addToCartButton: {
        backgroundColor: '#FFD700',
        padding: 10,
        borderRadius: 5,
    },
    addToWishlistButton: {
        backgroundColor: '#87CEEB',
        padding: 10,
        borderRadius: 5,
    },
    description: {
        fontSize: 15,
    },
};

export default MyCard;
