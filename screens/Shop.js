import React from 'react';
import { Rating } from 'react-native-elements';
import {
  Text,
  Button,
  FlatList,
  View,
  TouchableHighlight,
  Platform,
  Image,
  ScrollView
} from 'react-native';
import { Container, ScrollContainer } from '../styles/';
import { provincies } from '../data';

export default function Shop(props) {
  let shop = props.navigation.state.params.shop;
  console.log(shop);
  return (
    <ScrollView>
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
        <View
          style={{
            width: '90%',
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10
          }}
        >
          <View>
            <Text style={{ fontWeight: '700' }}>beoordeling</Text>
            <Text>Kwaliteit</Text>
            <Text>Prijs</Text>
            <Text>Uitstraling</Text>
            <Text>Klantvriendelijkheid</Text>
            <Text>Keuze mogelijkheid</Text>
          </View>

          <View style={{alignItems: 'center'}}>
            <Text>23 beoordelingen</Text>
            <Text>20</Text>
            <Text>14</Text>
            <Text>10</Text>
            <Text>5</Text>
            <Text>13</Text>
          </View>
        </View>

        <View
          style={{
            width: '90%',
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10
          }}
        >
          <View>
            <Text style={{ fontWeight: '700' }}>Openingstijden</Text>
            <Text>Maandag</Text>
            <Text>Dinsdag</Text>
            <Text>Woensdag</Text>
            <Text>Donderdag</Text>
            <Text>Vrijdag</Text>
            <Text>Zaterdag</Text>
            <Text>Zondag</Text>
          </View>
          <View>
            <Text> </Text>
            <Text>09:00-18:00</Text>
            <Text>09:00-18:00</Text>
            <Text>09:00-18:00</Text>
            <Text>09:00-18:00</Text>
            <Text>09:00-18:00</Text>
            <Text>09:00-18:00</Text>
            <Text>09:00-18:00</Text>
          </View>
        </View>
      </Container>
    </ScrollView>
  );
}
// buttons zijn echte native buttons, ze zullen er in ios en android
// anders uitzien. Als je ze wilt stijlen zul je ze zelf moeten maken.
