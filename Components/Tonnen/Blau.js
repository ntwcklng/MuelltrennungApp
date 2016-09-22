import React, { Component } from 'react';
import HeadlineText from '../HeadlineText.js';
import DoDont from '../DoDont.js';
import {
  Text,
  StyleSheet,
  TouchableHighlight,
  ScrollView,
  View
} from 'react-native';

const DO = [
  'Briefumschläge',
  'Brottütchen',
  'Eierkartons',
  'Kataloge',
  'Prospekte',
  'Müslischachteln',
  'Klopapierrollen',
  'Zeitschriften',
  'Zeitungen'
];

const DONT = [
  'beschichtetes Papier',
  'Monatsbinden',
  'Servietten',
  'Tampons',
  'Taschentücher',
  'verschmutztes Papier',
  'Wattepads'
];


export default class BlaueTonne extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HeadlineText mainColor={true} center={true}>Blaue Tonne</HeadlineText>
        <DoDont do={DO} dont={DONT}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fbfbfb',
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