import React, { Component } from 'react';
import HeadlineText from './HeadlineText.js';
import {
  Text,
  View,
  ScrollView,
  StyleSheet
} from 'react-native';


export default class Hilfe extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{padding: 10}}>
          <HeadlineText mainColor={true} center={true}>Warum?</HeadlineText>
          <Text style={styles.text}>Darum.</Text>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: '#fbfbfb',
  },
  text: {
    color: '#585858'
  },
});