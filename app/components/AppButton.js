import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

function AppButton({ title, onPress, top }) {
    return (
        <TouchableOpacity style={styles.btn} onPress={onPress}>
            <Text style={styles.txt}>{title}</Text>
        </TouchableOpacity>
    );
}


export default AppButton;

const styles = StyleSheet.create({
    btn: {
        borderRadius: 10,
        borderWidth: 3,
        borderColor: "black",
        backgroundColor: "hotpink",
        marginBottom: 10,
        margin: 10,
        height: 45,
        width: 180,
        justifyContent: "center",
        alignContent: "center",
        top: 10
    },
    txt: {
        color: "white",
        fontSize: 22,
        textAlign: "center"
    }

})