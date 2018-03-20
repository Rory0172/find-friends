import React from 'react';
import { Text, Button, FlatList, View, TouchableHighlight, Platform } from 'react-native';
import { Container} from '../styles/';

export default function Shops(props) {
  return (
    <Container>
      <Text>In welke provincie zoek je een shop?</Text>
      <FlatList
        ItemSeparatorComponent={
          Platform.OS !== 'android' &&
          (highlighted => (
            <View style={[style.separator, highlighted && { marginLeft: 0 }]} />
          ))
        }
        data={data}
        renderItem={({ item, separators }) => (
          <TouchableHighlight
            onPress={() => this._onPress(item)}
            onShowUnderlay={separators.highlight}
            onHideUnderlay={separators.unhighlight}
          >
            <View style={{ backgroundColor: 'white' }}>
              <Text>{item.name}</Text>
            </View>
          </TouchableHighlight>
        )}
      />
    </Container>
  );
}

const data = [
  {
    id: 1,
    name: "Zuid-Holland"
  },
  {
    id: 2,
    name: 'Noord-Holland'
  },
  {
    id: 3,
    name: "Noord-Brabant"
  },
  {
    id: 4,
    name: 'Gelderland'
  },
  {
    id: 5,
    name: "Utrecht"
  },
  {
    id: 6,
    name: 'Overijssel'
  }
  ,{
    id: 7,
    name: "Limburg"
  },
  {
    id: 8,
    name: 'Friesland'
  },
  {
    id: 9,
    name: "Groningen"
  },
  {
    id: 10,
    name: 'Drenthe'
  },
  {
    id: 11,
    name: "Flevoland"
  },
  {
    id: 12,
    name: 'Zeeland'
  }
];
// buttons zijn echte native buttons, ze zullen er in ios en android
// anders uitzien. Als je ze wilt stijlen zul je ze zelf moeten maken.
