import React, {Component} from "react"
import {View, StyleSheet} from "react-native"
import Headquarters from "./Headquarters"

export default class MainLevel extends Component {
  render() {
    return <View style={styles.level}>
      <View style={styles.levelSide}>
        <Headquarters />
      </View>
      <View style={styles.levelSide}>
        <Headquarters />
      </View>
    </View>
  }
}

const styles = StyleSheet.create({
  level: {
    backgroundColor: "black",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  levelSide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
})
