import React from 'react';

import { SwitchNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import { FontAwesome } from "react-native-vector-icons";

import SignUp from './screens/SignUp';
import SignIn from './screens/SignIn';

import Maps from './screens/Maps';
import Shops from './screens/Shops';

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
    Shops: {
      screen: Shops,
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
