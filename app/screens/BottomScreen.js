import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

function BottomScreen(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is Bottom Screen 3</Text>
    </View>
  );
}

export default BottomScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: 'black',
    fontSize: 25,
    textAlign: 'center',
  },
});
