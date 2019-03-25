import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Hello extends Component {
	
	render() {
		return (
			<View style={styles.container}>
				<Text> Hello World !!! </Text>
			</View>
		);
	}
} 

const styles = StyleSheet.create ({
	container:{
	}
})

export default Hello;