import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {DrawerNavigator} from '@react-navigation/drawer';
import ScreenA from './screens/ScreenA';
import ScreenB from './screens/ScreenB';
import ScreenC from './screens/ScreenC';
import drawerContentComponents from './drawerContentComponents';


export const DrawerNav = DrawerNavigator (
    {
        ScreenA:{ screen: ScreenA },
        ScreenB:{ screen: ScreenB },
        ScreenC:{ screen: ScreenC }
    },
    {
       contentComponent: drawerContentComponents
    });