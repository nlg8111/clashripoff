import React, {Component} from "react"
import {AppRegistry} from "react-native"
import MainLevel from "./src/components/MainLevel"

export default class clashripoff extends Component {
  render() {
    return <MainLevel/>
  }
}

AppRegistry.registerComponent("clashripoff", () => clashripoff)
