import React from 'react';

import {
  StackNavigator,
  SwitchNavigator,
  TabNavigator,
  TabBarBottom
} from 'react-navigation';
import { FontAwesome } from 'react-native-vector-icons';

import SignUp from './screens/SignUp';
import SignIn from './screens/SignIn';

import Maps from './screens/Maps';
import Shops from './screens/Shops';

import stackNav from './stackNav';

import { provincies } from './screens/Shops';

export const SignedOut = SwitchNavigator({
  SignUp: {
    screen: SignUp
  },
  SignIn: {
    screen: SignIn
  }
});

export const SignedIn = TabNavigator(
  {
    Maps: {
      screen: Maps,
      navigationOptions: {
        tabBarLabel: 'Map'
      }
    },
    shopsTab: {
      screen: stackNav,
      navigationOptions: {
        tabBarLabel: 'Shops'
      }
    }
  },
  {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom'
  }
);
