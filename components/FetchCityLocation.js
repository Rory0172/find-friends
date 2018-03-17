import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

const fetchCityLocation = props => {
  return (
    <View style={styles.button}>
      <Button
        title="Search"
        color="#841584"
        onPress={props.onGetCityLocation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    top: 60,
    left: 10,
    zIndex: 999
  }
});
export default fetchCityLocation;
