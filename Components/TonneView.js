import React, { Component } from 'react';
import GraueTonne from './Tonnen/Grau.js';
import GelbeTonne from './Tonnen/Gelb.js';
import BlaueTonne from './Tonnen/Blau.js';
import HeadlineText from './HeadlineText.js';
import {
  Text,
  StyleSheet,
  TouchableHighlight,
  ScrollView,
  View
} from 'react-native';


export default class TonneView extends Component {
  render() {
    let Tonne;
    switch(this.props.tonne) {
      case 'blau':
      Tonne = (<BlaueTonne />);
      break;
      case 'grau':
      Tonne = (<GraueTonne />);
      break
      case 'gelb':
      Tonne = (<GelbeTonne />);
      break;
    }
    return (
      <View style={{backgroundColor: '#fbfbfb', flex:1, padding: 0}}>
        <ScrollView style={{padding: 10}}>
          <HeadlineText mainColor={true}>TONNE</HeadlineText>
          {Tonne}
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