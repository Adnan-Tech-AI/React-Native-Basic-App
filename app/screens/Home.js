import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { ImageSlider } from "react-native-image-slider-banner";
import Card from '../components/Card';

//import AsyncStorage from '@react-native-async-storage/async-storage';

function Home({ navigation }) {
    images = [
        { img: require("../assets/naimal.jpg") },
        { img: require("../assets/tech.jpeg") },
    ];

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const userData = await AsyncStorage.getItem("undefinedcart");
    //             console.log(userData);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };

    //     fetchData();
    // }, []);

    return (
        <View>
            <ImageSlider data={images} autoPlay localImg />
            <Card image={require("../assets/mobile.jpg")} title="Mobile Phone" price="10000" subtitle="This is the best mobile available at low cost." />
        </View>
    );
}


export default Home;

const styles = StyleSheet.create({
    container: {

    }

})