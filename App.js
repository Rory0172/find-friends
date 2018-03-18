import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';

import FetchLocation from './components/FetchLocation';
import FetchCityLocation from './components/FetchCityLocation';
import UsersMap from './components/UsersMap';
import { Container } from './styles/grid';
import { SearchBar } from './styles/searchBar';

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
      <Container>
        <FetchLocation onGetLocation={this.getUserLocationHandler} />
        <FetchCityLocation onGetCityLocation={this.getCityLocation} />
        <UsersMap shopPlaces={data} userLocation={this.state.userLocation} />
        <SearchBar
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
      </Container>
    );
  }
}

const data = [
  {
    id: 1,
    name: "t' zoldertje!",
    latitude: 52.370216,
    longitude: 4.915168
  },
  {
    id: 2,
    name: 'de Vliegende Hollander',
    latitude: 52.380216,
    longitude: 4.905168
  }
];
