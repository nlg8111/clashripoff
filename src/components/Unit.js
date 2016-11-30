import React, {Component} from "react"
import {Text, StyleSheet} from "react-native"

export default class Unit extends Component {

  constructor() {
    super()
    this.state = {
      progress: 0.0
    }
  }

  render() {
    let location = this.state.progress
    let locationStyle = {
      bottom: location
    }

    return <Text style={[locationStyle, styles.unit]}>Unit</Text>
  }
}

const styles = StyleSheet.create({
  unit: {
    color: "white"
  },
})
