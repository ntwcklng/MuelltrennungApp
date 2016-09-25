/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Text,
  TouchableOpacity,
  BackAndroid,
  Image
} from 'react-native';

import Hilfe from './Components/Views/Hilfe';
import MainView from './Components/Views/MainView';
import TonneView from './Components/Views/TonneView';

class MuelltrennungApp extends Component {
  _showHelp() {
    this.refs.nav.push({
      component: Hilfe,
      title: '?'
    })
  }
  navigationRenderScene(route, navigator) {
    _navigator = navigator;
    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (_navigator.getCurrentRoutes().length === 1) return false;
      _navigator.pop();
      return true;
    });
    const comp = route.component;
    switch (route.id) {
      case 'init':
        return (<MainView navigator={navigator} />);
      case 'help':
        return (<Hilfe navigator={navigator} />)
      case 'tonneview':
        return (<TonneView tonne={route.passProps.tonne} navigator={navigator} />)
    }
  }
  render() {
    const routes = [
      {id: 'init', index: 0},
      {id: 'help', index: 1},
      {id: 'tonneview', index: 2},
    ];

    const NavigationBarRouteMapper = {
      LeftButton: (route, navigator, index, navState) => {
        if(index === 0) {
          return null;
        }
        const previousRoute = navState.routeStack[index - 1];
        return (
          <TouchableOpacity onPress={() => navigator.pop()}>
            <Image source={require('./Components/Images/BackButton.png')} resizeMode='contain' style={styles.backButton}/>
            <Text>Zurück</Text>
          </TouchableOpacity>
        );
      },
      RightButton: (route, navigator, index, navState) => {
        if (route.rightElement) {
          return route.rightElement
        }
      },
      Title: (route, navigator, index, navState) => {
        return null;
      }
    }

    return (
      <Navigator
        navigationBar={
          <Navigator.NavigationBar routeMapper={NavigationBarRouteMapper} />
        }
        configureScene={(route, routeStack) =>
          Navigator.SceneConfigs.HorizontalSwipeJump
        }
        ref='nav'
        initialRoute={routes[0]}
        renderScene={this.navigationRenderScene}
        style={{flex: 1}}
        barTintColor='#02B875'
        tintColor='#f6f6f6'
        titleTextColor='#FFFFFF'
        itemWrapperStyle={{backgroundColor: '#fbfbfb'}}
        />
    );
  }
}
const styles = StyleSheet.create({
  backButton: {
    width: 35,
    height: 35,
    margin: 10,
  },
});


AppRegistry.registerComponent('MuelltrennungApp', () => MuelltrennungApp);
