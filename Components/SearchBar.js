import React, { Component } from 'react';
import TonneView from './Views/TonneView';
import Fuse from 'fuse.js';
import Icon from 'react-native-vector-icons/FontAwesome';
const SearchPattern = require('./Data/Search');

import {
  TextInput,
  View,
  StyleSheet,
  Alert,
  TouchableOpacity
} from 'react-native';

const searchOptions = {
  keys: ['items'],
  id: 'TONNE',
  tokenize: true,
  matchAllTokens: true,
  threshold: 0.2,
  location: 0,
  distance: 101
};
const linkSearch = new Fuse(SearchPattern, searchOptions);

export default class SearchBar extends Component {

  constructor (props) {
    super(props);
    this.state = {
      query: ''
    };
    this._onSubmit = this._onSubmit.bind(this);
  }
  _onSubmit () {
    const { query } = this.state;
    if (query === '') {
      return Alert.alert('Gib zuerst was ins Suchfeld ein');
    }

    const searchResult = linkSearch.search(query);
    if (searchResult.length === 0 || (query === '' || searchResult.length > 2)) {
      return Alert.alert('Leider konnten wir nichts finden');
    } else {
      this.props.navigator.push({
        id: 'tonneview',
        component: TonneView,
        passProps: { tonne: searchResult[0], searchText: query }
      });
    }
  }
  render () {
    const { placeholder } = this.props;
    return (
      <View style={styles.container}>
        <TextInput
          ref='searchBar'
          style={styles.searcher}
          placeholder={placeholder}
          onSubmitEditing={this._onSubmit}
          onChangeText={(text) => this.setState({ query: text })}
          value={this.state.query}
          underlineColorAndroid='rgba(0,0,0,0)'
          blurOnSubmit
          autoFocus={false}
        />
        <TouchableOpacity onPress={this._onSubmit} style={styles.searchButton}>
          <Icon name='search' size={20} color='#fff' />
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  searchButton: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 5,
    backgroundColor: '#02B875',
    marginHorizontal: 7
  },
  container: {
    marginVertical: 10,
    flexDirection: 'row'
  },
  searcher: {
    flex: 0.9,
    height: 32,
    borderWidth: 0,
    borderRadius: 5,
    backgroundColor: 'white',
    paddingVertical: 5,
    paddingHorizontal: 15,
    color: '#585858',
    fontSize: 14,
    marginLeft: 10
  }
});
