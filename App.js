import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import FetchLocation from './components/FetchLocation';
import FetchCityLocation from './components/FetchCityLocation';
import UsersMap from './components/UsersMap';

export default class App extends React.Component {
  state = {
    userLocation: null,
    text: ''
  };

  getUserLocationHandler = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);
        this.setState({
          userLocation: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }
        });
      },
      err => console.log(err)
    );
  };

  getCityLocation = () => {
    return fetch(
      'https://maps.googleapis.com/maps/api/geocode/json?address=' +
        this.state.text +
        ',+NL&key=AIzaSyDL63JVLEhpIIrVZzVHUFZZj7f6yi9DG7o'
    )
      .then(response => response.json())
      .then(
        responseJson => {
          this.location = responseJson.results[0].geometry.location;
          this.setState({
            userLocation: {
              latitude: this.location.lat,
              longitude: this.location.lng,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }
          });
        },
        err => console.log(err)
      );
  };

  render() {
    return (
      <View style={styles.container}>
        <FetchLocation onGetLocation={this.getUserLocationHandler} />
        <FetchCityLocation onGetCityLocation={this.getCityLocation} />
        <UsersMap userLocation={this.state.userLocation} />
        <TextInput
          style={styles.input}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    height: 40,
    width: '100%',
    backgroundColor: 'white',
    position: 'absolute',
    top: 20,
    zIndex: 999
  }
});
