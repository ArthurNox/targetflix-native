import React from 'react';
import { createAppContainer  } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import Home from './pages/home'
import Details from './pages/details'
import './config/StatusBar'

const switchNav = createStackNavigator({
    Home,
    Details
})

export default createAppContainer(switchNav);
