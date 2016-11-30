import React, {Component} from "react"
import {TouchableHighlight, Text, View} from "react-native"
import Unit from "./Unit"
import {generateUUID} from "../utils"

export default class UnitContainer extends Component {

  constructor() {
    super()

    this.state = {
      units: []
    }
  }

  addUnit() {
    this.setState({
      units: this.state.units.concat(<Unit key={generateUUID()} />)
    })
  }

  render() {
    let numberOfUnits = this.state.units.length
    return (
      <TouchableHighlight onPress={this.addUnit.bind(this)}>
        <View>
          <Text># of units: {numberOfUnits}</Text>
          {this.state.units}
        </View>
      </TouchableHighlight>
    )
  }

}
