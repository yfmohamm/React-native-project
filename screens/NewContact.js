import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class NewContact extends Component {
    render() {
        return(
            <View style = {styles.container}>
                <Text>
                    NewContact Screen
                </Text>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});