import React, { Component, PropTypes } from 'react';
import Fuse from 'fuse.js';
import Icon from 'react-native-vector-icons/FontAwesome';
const SearchPattern = require('./Data/Search');

import {
  TextInput,
  View,
  StyleSheet,
  Alert,
} from 'react-native';


const searchOptions = {
  keys: ['items'],
  id: 'TONNE',
  tokenize: true,
  matchAllTokens: true,
  threshold: 0.2,
  location: 0,
  distance: 101,
};
const linkSearch = new Fuse(SearchPattern, searchOptions);

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
  componentDidMount() {
    fetch('https://gist.github.com/ntwcklng/54d803c7ef10df88aa9179bdcb548ca9.js').then((res) => {
      console.log(res);
    });
  }
  _onSubmit() {
    if (this.state.query.toLowerCase() === 'homo') return Alert.alert('Meintest du vielleicht "Mathias Schürmann"?');

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
        <Icon name='search' size={20} color='#585858' style={{marginHorizontal: 15, marginVertical: 5,}}/>
        <TextInput
          ref='searchBar'
          style={styles.searcher}
          placeholder={placeholder}
          returnKeyType='search'
          onSubmitEditing={this._onSubmit}
          onChangeText={(text) => this.setState({ query: text })}
          value={this.state.query}
          underlineColorAndroid='rgba(0,0,0,0)'
          blurOnSubmit={true}
          autoFocus={false}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#fff',
    marginVertical: 10,
    flexDirection: 'row',
  },
  searcher: {
    flex: .9,
    height: 32,
    borderWidth: 0,
    borderRadius: 5,
    backgroundColor: 'white',
    paddingVertical: 5,
    paddingHorizontal: 15,
    color: '#585858',
    fontSize: 14,
  },
});