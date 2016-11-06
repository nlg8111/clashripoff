import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
import Headquarters from 'Headquarters'

export default class MainLevel extends Component {
    render() {
        return <View style={styles.level}>
            <Headquarters style={ styles.opponentHq } />
            <Headquarters style={ styles.playerHq } />
        </View>
    }
}

const styles = Stylesheet.create({
    level: {
        backgroundColor: "black",
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: 'center'
    },
    playerHq: {
        flex: 1,
    },
    opponentHq: {
        flex: 1,
    }
});
