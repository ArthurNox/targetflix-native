import React from 'react';
// import Routes from './routes'
import { createAppContainer  } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import Home from './pages/home'
import Details from './pages/details'
import './config/StatusBar'

// const App = () => <Routes />

const switchNav = createStackNavigator({
    Home,
    Details
})

export default createAppContainer(switchNav);

// yarn add react-native-gesture-handler

// react-native link react-native-gesture-handler

