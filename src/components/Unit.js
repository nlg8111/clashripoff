import React, {Component} from "react"
import {View} from "react-native"
import styles from "../styles"

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

    return <View style={[locationStyle, styles.unit]} />
  }
}
