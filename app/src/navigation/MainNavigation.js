import React from 'react';

import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator
} from 'react-navigation';

import { createDrawerNavigator } from 'react-navigation-drawer';

import MainPage from '../pages/MainPage/MainPage';
import CustomDrawer from './customDrawer';
import Colors from '../constants/Colors';
import Icon from 'react-native-vector-icons/Ionicons'


const StartTuru = createStackNavigator(
  {
    MainPage: MainPage,
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
      drawerIcon: drawerConfig => (
        <Icon
          name={'md-qr-scanner'}
          size={23}
          color={drawerConfig.tintColor}
        />
      )
    },
  }
)



const MainNavigator = createDrawerNavigator(
  {
    MainPage: {
      screen:  StartTuru,
      navigationOptions: {
        drawerLabel: 'INÍCIO'
      }
    }
  },
  {
    drawerBackgroundColor: "grey",
    contentOptions: {
      activeBackgroundColor: Colors.primary,
      activeTintColor: '#fff',
      inactiveTintColor: '#fff',
    },
    contentComponent:(props) => (
        <CustomDrawer {...props}/>
    ),
  }
);


const initialAuth = createSwitchNavigator(
    {
        MainScreen: MainNavigator,
    }
  )

export default createAppContainer(initialAuth);
