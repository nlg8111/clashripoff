import React, {Component} from "react"
import {TouchableWithoutFeedback, View} from "react-native"
import Unit from "./Unit"
import {generateUUID} from "../utils"
import styles from "../styles"
import engine from "../gameLogic/Engine"

export default class UnitContainer extends Component {

  constructor() {
    super()
    this.width = 0

    engine.attachView(this)

    this.state = {
      units: []
    }
  }

  update() {
    this.setState({
      units: engine.boardState.getUnits().map(unit =>
        <Unit
          position={unit.getLocation() * this.width}
          color={unit.player.color}
          key={generateUUID()}
        />
      )
    })
  }

  storeWidth(event) {
    this.width = event.nativeEvent.layout.width
  }

  addUnit() {
    engine.spawnFriendlyUnit()
  }

  render() {
    return (
      <TouchableWithoutFeedback style={[styles.centerContent]} onPress={this.addUnit.bind(this)} onLayout={this.storeWidth.bind(this)}>
        <View style={[styles.centerContent, {alignSelf: "stretch", overflow: "hidden"}]}>
          {this.state.units}
        </View>
      </TouchableWithoutFeedback>
    )
  }
}
