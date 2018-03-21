import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Shops from './screens/Shops';
import Shop from './screens/Shop';
import Provinces from './screens/Provinces';

const stackNav = StackNavigator({
    Shops: {
        screen: Shops
    },
    Provinces: {
        screen: Provinces
    },
    Shop: {
        screen: Shop
    }
});

export default stackNav;
