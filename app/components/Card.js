import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableHighlight,
  Button,
} from 'react-native';
import AppText from '../components/AppText';
function Card({
  title,
  image,
  subtitle,
  price,
  onPress,
  handleWishlist,
  handleCart,
  key,
}) {
  return (
    <TouchableHighlight
      key={key}
      onPress={onPress}
      underlayColor="lightgrey"
      style={styles.card}>
      <View>
        <Image source={image} style={styles.image} resizeMode="contain" />
        <View style={{padding: 3}}>
          <AppText title={'Name : ' + title} textsize={20} />
          <AppText title={'Price : ' + price} textsize={20} />
          <Text style={styles.text} numberOfLines={2}>
            {subtitle}
          </Text>
        </View>
        <View style={{flexDirection: 'row', paddingLeft: 120, marginBottom: 5}}>
          <View style={{marginRight: 10}}>
            <Button title="Add To Cart" onPress={handleCart}></Button>
          </View>
          <View>
            <Button title="Add To Wishlist" onPress={handleWishlist}></Button>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
}

export default Card;

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    backgroundColor: 'lightgray',
    overflow: 'hidden',
    width: '100%',
    height: 380,
    alignSelf: 'center',
    top: 10,
    padding: 10,
    margin: 5,
  },

  image: {
    width: '100%',
    height: 240,
  },

  text: {
    fontSize: 15,
    fontFamily: 'Roboto',
    color: 'black',
  },
});
