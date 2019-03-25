import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Hello from '../components/hello';

class Imagem extends Component {
	
	render() {
		return (
			<View style={styles.container}>
				<Image source={{uri:'https://raw.githubusercontent.com/lucasbento/react-native-actions/master/common/media/'+ this.props.nome+'.png'}}
				 style={{width: this.props.largura , height: '30%'}} />
				<Hello />
			</View>
		);
	}
} 

const styles = StyleSheet.create ({
	container:{
		flex: 1,
		paddingTop: 10,
		justifyContent: 'center',
		alignItems:'center'
	}
})

export default Imagem;