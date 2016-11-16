import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class Headquarters extends Component {
    render() {
        return <View style={[this.props.style, styles.hq]}>
            <Text>HQ</Text>
        </View>
    }
}

const styles = StyleSheet.create({
    hq: {
        borderColor: "white",
        borderWidth: 1,
        width: 100,
        height: 100
    },
});