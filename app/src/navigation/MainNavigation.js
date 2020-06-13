import React from 'react';

import {
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';
import MainPage from '../pages/MainPage/MainPage';


const initialAuth = createSwitchNavigator(
    {
        MainScreen: MainPage,
    }
  )

export default createAppContainer(initialAuth);
