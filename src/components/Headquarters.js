import React, {Component} from "react"
import {Text, View, StyleSheet} from "react-native"
import styles from "../styles"

export default class Headquarters extends Component {
  render() {
    return <View style={[styles.block, hqStyles.hq]}>
      <Text>HQ</Text>
    </View>
  }
}

const hqStyles = StyleSheet.create({
  hq: {
    width: 100,
    height: 100
  }
})
