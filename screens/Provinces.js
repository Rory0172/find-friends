import React from 'react';
import { Rating } from 'react-native-elements';
import {
  Text,
  Button,
  FlatList,
  View,
  TouchableHighlight,
  Platform
} from 'react-native';
import { Container } from '../styles/';
import { shops } from '../data';

class Provinces extends React.Component {
  render() {
    const { params } = this.props.navigation.state;
    return (
      <Container>
        <Text>Vindt de beste shops in {params.province.name}</Text>
        <Text>Best beoordeeld</Text>
        <FlatList
          ItemSeparatorComponent={
            Platform.OS !== 'android' &&
            (highlighted => (
              <View
                style={[style.separator, highlighted && { marginLeft: 0 }]}
              />
            ))
          }
          data={shops}
          renderItem={({ item, separators }) => (
            <TouchableHighlight
              onPress={() => navigation.navigate('Shop', { shop: item })}
              onShowUnderlay={separators.highlight}
              onHideUnderlay={separators.unhighlight}
            >
              <View style={{ backgroundColor: 'white' }}>
                <Text>{item.name}</Text>
                <Rating
                  type="star"
                  startingValue={item.stars}
                  imageSize={20}
                  style={{ paddingVertical: 10 }}
                />
              </View>
            </TouchableHighlight>
          )}
        />
      </Container>
    );
  }
}

export default Provinces;
