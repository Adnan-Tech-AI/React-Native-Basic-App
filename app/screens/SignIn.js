import react, { useState, useEffect } from 'react'
import { TextInput, Button, Text, StyleSheet, ImageBackground, View } from 'react-native';

import AppButton from '../components/AppButton';

import AsyncStorage from '@react-native-async-storage/async-storage'

const SignIn = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userData = await AsyncStorage.getAllKeys();
                console.log(userData);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);


    async function login(username, password) {
        try {
            const data = await AsyncStorage.getItem(username);
            let parsed = JSON.parse(data);
            if (parsed.name == username) {
                console.log('Login successful');
                navigation.navigate("drawer")
            } else {
                console.log('Invalid login credentials');
            }
        } catch (error) {
            alert("Invalid login credentials");
        }
    };

    // const handleLogin = () => {
    //     try {
    //         console.log(username, password)
    //         AsyncStorage.setItem("currentUser", JSON.stringify({ username, password }));

    //     } catch (error) {
    //         // console.log(values);
    //         console.log(error)

    //     }
    // };



    return (
        <ImageBackground source={require("../assets/bg-img.jpg")} resizeMode="cover" style={styles.image} blurRadius={2.5} >
            <View>
                <Text style={styles.header}>Login Screen</Text>
                <TextInput placeholder='Enter Your Username' style={styles.input} placeholderTextColor="darkgrey" onChangeText={(text) => setUsername(text)} />
                <TextInput placeholder='Enter Your Password' style={styles.input} secureTextEntry placeholderTextColor="darkgrey" onChangeText={(text) => setPassword(text)} />
                <AppButton title="Submit" onPress={() => login(username, password)} />
                <AppButton style={styles.txt} onPress={() => navigation.navigate("register")} title="Register" />
                <Text style={styles.txt} onPress={() => navigation.navigate("changepassword")}>Change Password</Text>
            </View>
        </ImageBackground >
    );
};

export default SignIn;

const styles = StyleSheet.create({
    input: {
        borderWidth: 3,
        borderColor: "gray",
        marginBottom: 10,
        margin: 10,
        borderRadius: 10,
        backgroundColor: "white"
    },
    input: {
        borderWidth: 3,
        borderColor: "gray",
        marginBottom: 10,
        margin: 10,
        borderRadius: 10,
        backgroundColor: "white"
    },
    image: {
        flex: 1,
        justifyContent: "flex-end",
    },
    btn: {
        borderRadius: 10,
        borderWidth: 3,
        borderColor: "black",
        backgroundColor: "darkred"
    },
    txt: {
        color: "white",
        fontSize: 20,
        textAlign: "center",
        marginBottom: 10,
    },
    header: {
        color: "darkred",
        fontSize: 25,
        textAlign: "center",
        fontWeight: "bold",
        backgroundColor: 'white',
        marginBottom: 20
    },


})