/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  NavigatorIOS
} from 'react-native';

import Hilfe from './Components/Views/Hilfe.js';
import MainView from './Components/Views/MainView.js';

class MuelltrennungApp extends Component {
  _showHelp() {
    this.refs.nav.push({
      component: Hilfe,
      title: ''
    })
  }
  render() {
    return (
      <NavigatorIOS
      ref='nav'
        style={{flex: 1}}
        barTintColor='#02B875'
        tintColor='#f6f6f6'
        titleTextColor='#FFFFFF'
        itemWrapperStyle={{backgroundColor: '#fbfbfb'}}
        initialRoute={{
          component: MainView,
          title: 'Mülltrennung',
          rightButtonTitle: '?',
          onRightButtonPress: () => this._showHelp(),
        }}
        />
    );
  }
}


AppRegistry.registerComponent('MuelltrennungApp', () => MuelltrennungApp);
