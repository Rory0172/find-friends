import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Shops from './screens/Shops';
import Provinces from './screens/Provinces';

const stackNav = StackNavigator({
    Shops: {
        screen: Shops
    },
    Provinces: {
        screen: Provinces
    }
});

export default stackNav;
