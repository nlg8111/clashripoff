import React, {Component} from "react"
import {AppRegistry} from "react-native"
import Game from "./src/components/Game"

export default class clashripoff extends Component {
  render() {
    return <Game/>
  }
}

AppRegistry.registerComponent("clashripoff", () => clashripoff)
