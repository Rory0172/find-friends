import React from 'react';
import { Rating } from 'react-native-elements';
import {
  Text,
  Button,
  FlatList,
  View,
  TouchableHighlight,
  Platform,
  Image
} from 'react-native';
import { Container } from '../styles/';
import { provincies } from '../data';

export default function Shop(props) {
  let shop = props.navigation.state.params.shop;
  console.log(shop);
  return (
    <Container>
      <Text>{shop.name}</Text>
      <Rating
        type="star"
        startingValue={shop.stars}
        imageSize={20}
        style={{ paddingVertical: 10 }}
        readonly
      />
      <Text>Gedempte Zuiderdiep 63, 9711 HC Amsterdam</Text>
      <Button title="OPENINGSTIJDEN" onPress={() => console.log('button')} />
      <Image
        style={{ width: '100%' }}
        source={require('../public/coffeeshop-photo.jpg')}
      />
      <Container>
        <Text>beoordeling</Text>
        <Text>23 beoordelingen</Text>
      </Container>
    </Container>
  );
}
// buttons zijn echte native buttons, ze zullen er in ios en android
// anders uitzien. Als je ze wilt stijlen zul je ze zelf moeten maken.
