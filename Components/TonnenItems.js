import React, { Component, PropTypes } from 'react';
import TonneView from './Views/TonneView';
import Tonnen from './Tonnen';
import HeadlineText from './HeadlineText';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  View,
  Image
} from 'react-native';


export default class TonnenItems extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
  }
  constructor(props, context) {
    super(props, context);
    this._onPressBtn = this._onPressBtn.bind(this);
  }
  _onPressBtn(tonne) {
    const title = tonne.toUpperCase();
    this.props.navigator.push({
      id: 'tonneview',
      component: TonneView,
      passProps: { tonne }
    })
  }
  render() {
    let showDelay = 50;
    const TonnenItems = Tonnen.map((tonne, i) => {
      showDelay = showDelay + 50;
      let MuellImg;
      switch(tonne.name) {
        case 'blau':
          MuellImg = require('./Images/Blaue.png');
          break;
        case 'grau':
          MuellImg = require('./Images/Graue.png');
          break;
        case 'gelb':
          MuellImg = require('./Images/Gelbe.png');
          break;
        case 'bio':
          MuellImg = require('./Images/Bio.png');
          break;
        case 'altglas':
          MuellImg = require('./Images/Altglas.png');
          break;
        case 'sperrmüll':
          MuellImg = require('./Images/Sperrmuell.png');
          break;
        case 'sondermüll':
          MuellImg = require('./Images/Sondermuell.png');
          break;
        case 'elektro':
          MuellImg = require('./Images/Elektro.png');
          break;
      };
      return (
        <Animatable.View delay={showDelay} animation='fadeInUp' easing='ease-out' duration={400} key={tonne.name}><TouchableOpacity

          onPress={() => this._onPressBtn(tonne.name)}
          style={styles.TonnenButton}>
          <View>
            <View style={styles.Item}>
                <Image
                  source={MuellImg}
                  style={styles.ImgBtn}
                />
                <Icon name="chevron-right" size={30} color='#02B875' />
            </View>
          <Text style={styles.TonnenDesc}>{tonne.desc}</Text>
          </View>
        </TouchableOpacity>
        </Animatable.View>
      )
    })
    return <View>{TonnenItems}</View>;
  }
}
const styles = StyleSheet.create({
  Item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  TonnenDesc: {
    marginTop: 15,
    color: '#585858',
    textAlign: 'center',
    flex: 1,
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
});