import React from 'react';

import { SwitchNavigator } from 'react-navigation';

import SignUp from './screens/SignUp';
import SignIn from './screens/SignIn';

export const SignedOut = SwitchNavigator({
  SignUp: {
    screen: SignUp
  },
  SignIn: {
    screen: SignIn
  }
});

