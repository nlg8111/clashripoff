import React, { Component } from "react"
import {
    Text,
    AppRegistry
} from "react-native"

class Castle extends Component {

  render() {
    return (
      <Text>Hello, is a castle</Text>
    )
  }

}

AppRegistry.registerComponent("Castle", () => Castle)
