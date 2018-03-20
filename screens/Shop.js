import React from 'react';
import {
  Text,
  Button,
  FlatList,
  View,
  TouchableHighlight,
  Platform
} from 'react-native';
import { Container } from '../styles/';
import { provincies } from '../data';

class Shop extends React.Component {
  render() {
    const { params } = this.props.navigation.state;
    return (
      <Container>
        <Text>{params.shop.name}</Text>
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </Container>
    );
  }
}

export default Shop;
