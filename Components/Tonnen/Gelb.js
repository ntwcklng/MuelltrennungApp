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
  'Alles mit den grünen Punkt',
  'Aluminium',
  'Dosen',
  'Duschgelflaschen',
  'Joghurtbecher',
  'Kronkorken',
  'Kunststoff',
  'Magarinebecher',
  'Müslibeutel',
  'Spraydosen',
  'Tetrapaks',
  'Zahnpastatuben'
];

const DONT = [
  'Glasflaschen',
  'Pappkartons'
];


export default class GelbeTonne extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HeadlineText mainColor={true} center={true}>Gelbe Tonne</HeadlineText>
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