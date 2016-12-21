import React, {Component} from "react"
import {TouchableHighlight, Text, View} from "react-native"
import Unit from "./Unit"
import {generateUUID} from "../utils"
import styles from "../styles"
import engine from "../gameLogic/Engine"

export default class UnitContainer extends Component {

  constructor() {
    super()

    engine.attachView(this)

    this.state = {
      units: []
    }
  }

  update() {
    this.setState({
      units: engine.boardState.getUnits().map(unit =>
        <Unit
          progress={unit.getLocation()}
          color={unit.player.color}
          key={generateUUID()}
        />
      )
    })
  }

  addUnit() {
    engine.spawnFriendlyUnit()
  }

  render() {
    return (
      <TouchableHighlight style={styles.block} onPress={this.addUnit.bind(this)}>
        <View style={styles.centerContent}>
          <Text style={styles.button}>Spawnaa</Text>
          {this.state.units}
        </View>
      </TouchableHighlight>
    )
  }

}
