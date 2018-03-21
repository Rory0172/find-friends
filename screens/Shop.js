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

export default function Shop(props) {
  console.log(props);
  return (
    <Container>
      <Text>shop info</Text>
    </Container>
  );
}

// buttons zijn echte native buttons, ze zullen er in ios en android
// anders uitzien. Als je ze wilt stijlen zul je ze zelf moeten maken.
