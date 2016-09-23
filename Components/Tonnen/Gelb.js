import React, { Component } from 'react';
import HeadlineText from '../HeadlineText.js';
import DoDont from '../DoDont.js';
import GlobalStyle from '../GlobalStyle.js';
import AnimImg from '../AnimImg.js';

import {
  Text,
  StyleSheet,
  TouchableHighlight,
  ScrollView,
  View,
  Image,
} from 'react-native';

const DO = [
  'Alles, mit dem grünen Punkt',
  'Aluminium',
  'Dosen',
  'Duschgelflaschen',
  'Joghurtbecher',
  'Kronkorken',
  'Kunststoff',
  'Margarinebecher',
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
        <AnimImg tonne='gelb' />
        <DoDont do={DO} dont={DONT}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});