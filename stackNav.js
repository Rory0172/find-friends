import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Shops from './screens/Shops';
import Shop from './screens/Shop';

const stackNav = StackNavigator({
    Shops: {
        screen: Shops
    },
    Shop: {
        screen: Shop
    }
});

export default stackNav;
