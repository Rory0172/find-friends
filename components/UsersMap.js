import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

const userMap = props => {
  let userLocationMarker = null;
  let shopLocations = [];

  if (props.userLocation) {
    userLocationMarker = <MapView.Marker coordinate={props.userLocation} />;
  }

  if (props.shopPlaces) {
    shopLocations = props.shopPlaces.map(data => (
      <MapView.Marker
        key={data.id}
        coordinate={data}
        title={data.name}
        onPress={() => console.log(data.name)}
      />
    ));
  }

  return (
    <View style={styles.mapContainer}>
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        region={props.userLocation}
        style={styles.map}
      >
        {userLocationMarker}
        {shopLocations}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    width: '100%',
    height: '100%',
    marginTop: 20
  },
  map: {
    width: '100%',
    height: '100%'
  }
});

export default userMap;
