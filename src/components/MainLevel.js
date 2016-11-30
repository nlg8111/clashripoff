import React, {Component} from "react"
import {View, StyleSheet} from "react-native"
import Headquarters from "./Headquarters"
import UnitContainer from "./UnitContainer"

export default class MainLevel extends Component {
  render() {
    return <View style={styles.level}>
      <View style={styles.levelSide}>
        <Headquarters />
      </View>
      <View>
          <UnitContainer />
      </View>
      <View style={styles.levelSide}>
        <Headquarters />
      </View>
    </View>
  }
}

const styles = StyleSheet.create({
  level: {
    backgroundColor: "green",
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
