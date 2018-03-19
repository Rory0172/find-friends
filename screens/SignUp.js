import React from 'react';
import { Text, Button } from 'react-native';
import { Container, TextInput } from '../styles';

export default function SignUp({ navigation }) {
  console.log(navigation);
  return (
    <Container>
      <Text>SignUp screen</Text>
      <TextInput placeholder={'E-mailadres'} />
      <TextInput placeholder={'Wachtwoord'} secureTextEntry />
      <Button title={'Inloggen'} onPress={() => navigation.navigate('Maps')} />
      <Text onPress={() => navigation.navigate('SignIn')}>Heb je al een account? </Text>
    </Container>
  );
}
// buttons zijn echte native buttons, ze zullen er in ios en android
// anders uitzien. Als je ze wilt stijlen zul je ze zelf moeten maken.
