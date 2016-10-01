import React, { Component, PropTypes } from 'react';
import TonneView from './TonneView';
import SearchView from './SearchView';
import TonnenItems from '../TonnenItems';
import HeadlineText from '../HeadlineText';
import Icon from 'react-native-vector-icons/FontAwesome';
import SearchBar from '../SearchBar.js';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  View,
  Image
} from 'react-native';


export default class MainView extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
  }
  constructor(props, context) {
    super(props);
    this._onSearch = this._onSearch.bind(this);
  }
  _onSearch(query, result) {
    console.log(query, result);
    this.props.navigator.push({
      id: 'tonneview',
      component: TonneView,
      passProps: { tonne: result[0], searchText: query }
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <SearchBar
            ref='SearchBar'
            placeholder='Ich suche...'
            onSearchButtonPress={(query, result) => this._onSearch(query, result)}
          />
          <HeadlineText center={true} mainColor={true}>Was möchtest du entsorgen?</HeadlineText>
          <TonnenItems navigator={this.props.navigator}/>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  TonnenDesc: {
    marginTop: 15,
    color: '#585858',
    textAlign: 'center',
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
    flex:1,
    alignItems: 'stretch',
    justifyContent: 'space-around'
  },
  container: {
    flex: 1,
    padding: 0,
    justifyContent: 'center',
  },
});