import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

function MyIcon({name, onPress}) {
  return (
    <TouchableOpacity style={{paddingRight: 10}} onPress={onPress}>
      <View
        style={{
          position: 'absolute',
          height: 25,
          width: 25,
          borderRadius: 12,
          backgroundColor: 'green',
          right: 25,
          bottom: 15,
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2000,
        }}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>2</Text>
      </View>
      <Ionicons name={name} size={30} color={'black'} />
    </TouchableOpacity>
  );
}

export default MyIcon;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // iconContainer: {
  //     paddingLeft: 20, paddingTop: 10, marginRight: 5
  // }
});
