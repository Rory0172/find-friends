import React from 'react';
import { Text, Button } from 'react-native';
import { Container, TextInput } from '../styles';

export default function SignIn({ navigation }) {
  return (
    <Container>
      <Text>SignIn screen</Text>
      <TextInput placeholder={'E-mailadres'} />
      <TextInput placeholder={'Wachtwoord'} secureTextEntry />
      <Text onPress={() => navigation.navigate('SignUp')}>Nog geen account? </Text>
    </Container>
  );
}
// buttons zijn echte native buttons, ze zullen er in ios en android
// anders uitzien. Als je ze wilt stijlen zul je ze zelf moeten maken.
