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

export default function Shops({navigation}) {
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
        data={provincies}
        renderItem={({ item, separators }) => (
          <TouchableHighlight
            onPress={() =>
              navigation.navigate('Shop', { shop: item })}
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

// buttons zijn echte native buttons, ze zullen er in ios en android
// anders uitzien. Als je ze wilt stijlen zul je ze zelf moeten maken.
