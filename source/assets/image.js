import React, { Component } from 'react';
import { View, Image } from 'react-native';

class Image extends Component {
	
	render() {
		return (
		<Imagem source={{uri:'https://raw.githubusercontent.com/lucasbento/react-native-actions/master/common/media/logo.png'}} style={{widht: '30%', height: '30%'}} />
		);
	}
} 


export default Image;