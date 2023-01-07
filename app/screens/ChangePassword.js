import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text, Alert } from 'react-native';
import AppButton from '../components/AppButton';

function ChangePassword({ navigation }) {
    const [newPassword, SetNewPassword] = useState("");
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 23, fontWeight: "bold", color: "black", textAlign: "center", marginBottom: 15, top: 10 }}>Reset Your Password</Text>
            <TextInput placeholder='Current Password' style={styles.input} placeholderTextColor="darkgrey" secureTextEntry />
            <TextInput placeholder='New Password' style={styles.input} placeholderTextColor="darkgrey" secureTextEntry onChangeText={(text) => SetNewPassword(text)} />
            <TextInput placeholder='Confirm New Password' style={styles.input} placeholderTextColor="darkgrey" secureTextEntry />
            <AppButton title="Submit" onPress={() => Alert.alert("Your New Password", newPassword)} />
        </View>

    );
}


export default ChangePassword;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    input: {
        borderWidth: 3,
        borderColor: "gray",
        marginBottom: 10,
        margin: 10,
        borderRadius: 10,
        backgroundColor: "white"
    },

})