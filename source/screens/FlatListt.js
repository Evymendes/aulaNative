   import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text} from 'react-native';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      lista: [
        {nome: 'Evelyn', idade: 24},
        {nome: 'Alice', idade: 24},
        {nome: 'Kelvin', idade: 24},      
        ]
    }
  }  

  listaRender(item) {
    return (
      <View style={styles.listagem}>
        <Text style={styles.listagemTexto}>{item.nome}</Text>
        <Text>{item.idade} anos </Text>
      </View>
    );
  }


  render(){
    return (
      <View style={styles.container}>
        <FlatList 
          data={this.state.lista}
          renderItem={({item}) => this.listaRender(item )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  listagem:{
    borderWidth: 1,
    borderColor: 'black'
  },
  listagemTexto:{
    fontSize: 20
  }
});