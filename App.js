import React from 'react';

import { StackNavigator } from 'react-navigation';

import Login from './screens/Login';
import Maps from './screens/Maps';

export default StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login'
    }
  },
  Maps: {
    screen: Maps,
    navigationOptions: {
      title: 'Maps'
    }
  }
});
