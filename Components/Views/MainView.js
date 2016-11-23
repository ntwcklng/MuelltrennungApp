import React, { Component } from 'react';
import TonnenItems from '../TonnenItems';
import HeadlineText from '../HeadlineText';
import SearchBar from '../SearchBar.js';
import GlobalStyle from '../GlobalStyle';
import { Text, StyleSheet, ScrollView, View } from 'react-native';

export default class MainView extends Component {
  render () {
    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps={false}>
          <HeadlineText center mainColor>
            Was möchtest du entsorgen?
          </HeadlineText>
          <View style={styles.descText}>
            <Text style={GlobalStyle.normalText}>
              Gib in das Suchfeld ein was du entsorgen möchtest ...
            </Text>
          </View>
          <SearchBar placeholder='z.B. Folie, Putztücher, Milchtüte, ...' navigator={this.props.navigator} />
          <View style={styles.descText}>
            <Text style={GlobalStyle.normalText}>
              ... oder stöbere in den einzelnen Kategorien
            </Text>
          </View>
          <TonnenItems navigator={this.props.navigator} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  descText: {
    margin: 15
  },
  TonnenDesc: {
    marginTop: 15,
    color: '#585858',
    textAlign: 'center'
  },
  ImgBtn: {
    height: 100,
    width: 100,
    alignSelf: 'center'
  },
  TonnenButton: {
    backgroundColor: '#fff',
    marginBottom: 20,
    padding: 10,
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'space-around'
  },
  container: {
    flex: 1,
    padding: 0,
    justifyContent: 'center'
  }
});
