import React from 'react';
import { Text, Button } from 'react-native';
import { Container, TextInput } from '../styles';

export default function Login(props) {
  console.log(props);
  return (
    <Container>
      <Text>Login screen</Text>
      <TextInput placeholder={'E-mailadres'} />
      <TextInput placeholder={'Wachtwoord'} secureTextEntry />
      <Button title={'Inloggen'} />
    </Container>
  );
}
// buttons zijn echte native buttons, ze zullen er in ios en android
// anders uitzien. Als je ze wilt stijlen zul je ze zelf moeten maken.
