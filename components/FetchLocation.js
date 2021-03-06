import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

const fetchLocation = props => {
  return (
    <View style={styles.button}>
      <Button title="Get location" onPress={props.onGetLocation} />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    top: 60,
    right: 10,
    zIndex: 999
  }
});
export default fetchLocation;
