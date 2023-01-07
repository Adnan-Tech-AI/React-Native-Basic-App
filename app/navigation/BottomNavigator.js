import React from 'react';
import { Text } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MyCalendar from '../screens/MyCalendar'

import Ionicons from 'react-native-vector-icons/Ionicons';


//Importing Drawer Navigation

import Home from '../screens/Home';
import AppNavigator from './AppNavigator';
import BottomScreen from '../screens/BottomScreen';

const Tab = createBottomTabNavigator();


function BottomNavigator() {
    return (
        <Tab.Navigator initialRouteName='bottom'>
            <Tab.Screen name="Feed" component={AppNavigator} options={{ headerShown: false, tabBarIcon: (tabInfo) => { return (<Ionicons name='home' size={25} color={tabInfo.focused ? "red" : "black"} />); }, tabBarLabel: ({ focused, color, size }) => (<Text style={{ color: focused ? 'red' : "black", fontSize: 13 }}>Home</Text>), }} />
            <Tab.Screen name="calendar" component={MyCalendar} options={{ tabBarIcon: (tabInfo) => { return (<Ionicons name='apps' size={25} color={tabInfo.focused ? "red" : "black"} />); }, tabBarLabel: ({ focused, color, size }) => (<Text style={{ color: focused ? 'red' : "black", fontSize: 13 }}>Screen 2</Text>), }} />
            <Tab.Screen name="screen3" component={BottomScreen} options={{ tabBarIcon: (tabInfo) => { return (<Ionicons name='logo-xbox' size={25} color={tabInfo.focused ? "red" : "black"} />); }, tabBarLabel: ({ focused, color, size }) => (<Text style={{ color: focused ? 'red' : "black", fontSize: 13 }}>Screen 3</Text>), }} />
        </Tab.Navigator>
    );
}

export default BottomNavigator;

