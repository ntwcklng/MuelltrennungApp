import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  TouchableHighlight,
  ScrollView,
  View
} from 'react-native';


export default class GelbeTonne extends Component {
  render() {
    return (
      <View style={{backgroundColor: '#fbfbfb', flex:1, padding: 20}}>
        <ScrollView>
          <Text>gelbe tonne</Text>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#02b875',
    marginBottom: 5,
  },
});