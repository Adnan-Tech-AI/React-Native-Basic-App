import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Importing Screens

import SignIn from '../screens/SignIn';
import RegisterValidate from '../screens/RegisterValidate';
import ChangePassword from '../screens/ChangePassword';

import BottomNavigator from './BottomNavigator';

const Stack = createNativeStackNavigator();

const AccountNavigator = () => (
    <Stack.Navigator initialRouteName='login'>
        <Stack.Screen name="login" component={SignIn} options={{ headerShown: false }} />
        <Stack.Screen name='register' component={RegisterValidate} />
        <Stack.Screen name="changepassword" component={ChangePassword} options={{ headerTitle: "Password Reset", headerTintColor: 'orange' }} />
        <Stack.Screen name="drawer" component={BottomNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
);

export default AccountNavigator;