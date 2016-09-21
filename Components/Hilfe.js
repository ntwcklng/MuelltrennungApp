import React, { Component } from 'react';
import HeadlineText from './HeadlineText.js';
import {
  Text,
  View,
  ScrollView
} from 'react-native';


export default class Hilfe extends Component {
  render() {
    return (
      <View style={{backgroundColor: '#fbfbfb', flex:1, padding: 0}}>
        <ScrollView style={{padding: 10}}>
          <HeadlineText mainColor={true} center={true}>Warum?</HeadlineText>
          <Text>Darum.</Text>
        </ScrollView>
      </View>
    );
  }
}