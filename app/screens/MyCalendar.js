import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';


function MyCalendar(props) {
    return (
        <View style={styles.container}>
            <Ionicons name='cart-outline' size={45} color={"black"} />
            <Text>This is calendar screen</Text>
        </View>
    );
}


export default MyCalendar;

const styles = StyleSheet.create({
    container: {

    }

})