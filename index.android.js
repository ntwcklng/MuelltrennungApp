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
  Image,
  View
} from 'react-native';

import Hilfe from './Components/Views/Hilfe';
import MainView from './Components/Views/MainView';
import TonneView from './Components/Views/TonneView';
import SearchView from './Components/Views/SearchView';

import Icon from 'react-native-vector-icons/FontAwesome';

class MuelltrennungApp extends Component {
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
      case 'tonneview':
        return (<TonneView tonne={route.passProps.tonne} searchText={route.passProps.searchText} navigator={navigator} />);
    }
  }
  render() {
    const routes = [
      {id: 'init', index: 0},
      {id: 'tonneview', index: 1},
    ];

    const NavigationBarRouteMapper = {
      LeftButton: (route, navigator, index, navState) => {
        if(index === 0) {
          return null;
        }
        const previousRoute = navState.routeStack[index - 1];
        return (
          <TouchableOpacity onPress={() => navigator.pop()}>
            <Icon style={styles.backButton} name="chevron-left" size={25} color='#02B875' />
          </TouchableOpacity>
        );
      },
      RightButton: (route, navigator, index, navState) => {
        return null;
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
        itemWrapperStyle={{backgroundColor: '#ececec'}}
        sceneStyle={{marginTop: 20}}
        />
    );
  }
}
const styles = StyleSheet.create({
  backButton: {
    margin: 10,
  },
});


AppRegistry.registerComponent('MuelltrennungApp', () => MuelltrennungApp);
