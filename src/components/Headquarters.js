import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class Headquarters extends Component {
    render() {
        return <View style={[this.props.style, styles.hq]}>
            HQ
        </View>
    }
}

const styles = StyleSheet.create({
    hq: {
        border: '1px solid white',
        width: 50,
        height: 50
    },
});