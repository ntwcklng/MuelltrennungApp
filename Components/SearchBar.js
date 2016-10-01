import React, { Component, PropTypes } from 'react';
import Fuse from 'fuse.js';

import {
  TextInput,
  View,
  StyleSheet,
  Alert,
} from 'react-native';

const searchPattern = [
  {
    'TONNE': 'grau',
    'items': 'restmüll essensreste brot brötchen fleisch fisch kondome binden monatsbinde pflaster putztücher speisereste rasierklingen joghurt obst gemüse'
  },
  {
    'TONNE': 'gelb',
    'items': 'grünerpunkt alu dosen duschgelflasche becher kunststoff kronkorken margarinebecher müslibeutel tetrapak milchtüte zahnpastetube joghurtbecher'
  }
];
const searchOptions = {
  keys: ['items'],
  id: 'TONNE',
  tokenize: true,
  matchAllTokens: true,
  threshold: 0.2,
  location: 0,
  distance: 101,
};
const linkSearch = new Fuse(searchPattern, searchOptions);

export default class SearchBar extends Component {
  static propTypes = {
    placeholder: PropTypes.string.isRequired,
  }
  constructor(props) {
    super(props);

    this.state = {
      query: ''
    };

    this._onSubmit = this._onSubmit.bind(this);
  }
  _onSubmit() {
    const searchResult = linkSearch.search(this.state.query)
    if (this.state.query === '' || searchResult.length > 2) return;
    if (searchResult.length === 0) {
      Alert.alert('Leider konnten wir nichts finden');
    } else {
      this.props.onSearchButtonPress(this.state.query, searchResult);
    }
  }
  render() {
    const { placeholder } = this.props;
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.searcher}
          maxLength={32}
          placeholder={placeholder}
          returnKeyType='search'
          onSubmitEditing={this._onSubmit}
          onChangeText={(text) => this.setState({ query: text })}
          value={this.state.query}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    top: 0,
    left: 0,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#e0e0e0',
  },
  searcher: {
    height: 32,
    borderRadius: 5,
    backgroundColor: 'white',
    padding: 5,
    color: '#585858',
    fontSize: 14,
    fontFamily: 'System',
  },
});