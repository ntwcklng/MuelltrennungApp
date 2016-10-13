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
  Image,
  TextInput
} from 'react-native';


export default class MainView extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
  }
  constructor(props, context) {
    super(props);
    this.state = {
      showToast: false,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps={false}>
          <HeadlineText center={true} mainColor={true}>Was möchtest du entsorgen?</HeadlineText>
          <View style={styles.descText}>
            <Text style={GlobalStyle.normalText}>Gib in das Suchfeld ein was du entsorgen möchtest ...</Text>
          </View>
          <SearchBar
            placeholder='z.B. Folie, Putztücher, Milchtüte, ...'
            navigator={this.props.navigator}
          />
          <View style={styles.descText}>
            <Text style={GlobalStyle.normalText}>... oder stöbere in den einzelnen Kategorien</Text>
          </View>
          <TonnenItems navigator={this.props.navigator}/>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  descText: {
    margin: 15,
  },
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