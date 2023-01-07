import react, { useState, useEffect } from 'react'
import { TextInput, Button, Text } from 'react-native';
//import AsyncStorage from '@react-native-async-storage/async-storage';

const RegisterScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    //const key = Date.now().toString();


    const handleUsernameChange = (username) => {
        setUsername(username);
    };

    const handlePasswordChange = (password) => {
        setPassword(password);
    };

    // const handleSubmit = async () => {
    //     try {
    //         await AsyncStorage.setItem(username, JSON.stringify({ username, password }));
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const userData = await AsyncStorage.getAllKeys();
    //             console.log(userData);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };

    //     fetchData();
    // }, [password]);


    return (
        <>
            <TextInput
                value={username}
                onChangeText={handleUsernameChange}
                placeholder="Username"
                autoCapitalize="none"
                autoCompleteType="username"
                textContentType="username"
            />
            <TextInput
                value={password}
                onChangeText={handlePasswordChange}
                placeholder="Password"
                secureTextEntry
                autoCapitalize="none"
                autoCompleteType="password"
                textContentType="password"
            />
            <Text>Welcome Dear</Text>
            <Button title="Log In" onPress={() => console.log("Welcome")} />
        </>
    );
};

export default RegisterScreen;
