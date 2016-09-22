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
  'Asche (kalt!)',
  'Brot',
  'Fisch & Fleisch',
  'Kondome',
  'Monatsbinden',
  'Pflaster',
  'Putztücher',
  'Rasierklingen',
  'Speisereste',
  'usw.'
];

const DONT = [
  'Alles was irgendwie wiederverwertet werden kann, gehört nicht in den Restmüll!'
];


export default class GraueTonne extends Component {
  render() {
    return (
      <View style={{backgroundColor: '#fbfbfb', flex:1, padding: 0}}>
          <HeadlineText mainColor={true} center={true}>Huhu</HeadlineText>
          <DoDont do={DO} dont={DONT}/>
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
});