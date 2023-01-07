import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import AppText from './AppText';

function ListCard({ title, onPress }) {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", top: 10 }}>
            <TouchableOpacity style={styles.container} onPress={onPress}>
                <AppText title={title} textAlign="center" textcolor='white' />
            </TouchableOpacity>
        </View>
    );
}


export default ListCard;

const styles = StyleSheet.create({
    container: {
        width: '80%',
        height: 50,
        backgroundColor: "black",
        borderRadius: 10,
        padding: 5,
        margin: 5,
        justifyContent: "center",
        alignContent: "center",

    }

})