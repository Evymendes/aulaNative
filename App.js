   import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text} from 'react-native';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {  }
  }  

   render(){
    return (
      <View style={styles.container}>
        <Text>Vai na Web</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
});