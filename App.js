import React from 'react';

import { View, StyleSheet, Text } from 'react-native';

import { NavigationContainer, useNavigation } from '@react-navigation/native';

import AccountNavigator from './app/navigation/AccountNavigator';
//import FeedNavigator from './app/navigation/FeedNavigator';
// import BottomNavigator from './app/navigation/BottomNavigator';

function App(props) {
  return (
    <NavigationContainer>
      <AccountNavigator />
    </NavigationContainer>
  );
}


export default App;

const styles = StyleSheet.create({
  container: {

  }

})