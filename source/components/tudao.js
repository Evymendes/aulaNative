/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  ImageBackground
} from 'react-native';

import Imagem from './source/screens/imagem';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

export default class App extends Component<Props> {

somar(n1, n2)  {
    return n1 + n2
  }

  render() {
    let imagem = {
      uri:'https://cdn.rawgit.com/lucasbento/react-native-actions/master/common/media/logo.png'
    };

    let name = 'Evelyn';
      return(
        <Imagem nome='logo' largura='100%'/>

        //<ImageBackground source={require('./bg.png')} style={styles.bgimage}>

        <Image source={require('./estudio.png')} style={{width:200, height:200}} />
         <Image source=
           {{uri:'https://cdn.rawgit.com/lucasbento/react-native-actions/master/common/media/logo.png'}}
            style={{width:200, height:200, resizeMode:'contain'}} 
          />

       <Text style={styles.nome}> Meu nome é {name} </Text>
       <Text style={styles.nome}> Meu nome é {name} </Text>

       <Text> A soma de 2 + 2 {this.somar(2,2)}</Text>

          <Image source={imagem} 
            style={{width:200, height:200}} />
            
       //</ImageBackground>
      <View style={styles.container}>
      <Imagem nome='logo'  largura='40%'/>

      </View>
    );
  }
}



const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  nome:{
    fontSize: 30,
    color: 'red'
  },
   bgimage:{
    flex:1,
    width:null
  },
  welcome: {
    textAlign: 'center',
    margin: 10,
    backgroundColor: 'black'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  texto:{
    color: 'pink'
  }
});