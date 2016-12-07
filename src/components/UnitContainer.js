import React, {Component} from "react"
import {TouchableHighlight, Text, View} from "react-native"
import Unit from "./Unit"
import {generateUUID} from "../utils"
import styles from "../styles"
import engine from "../gameLogic/Engine"

export default class UnitContainer extends Component {

  constructor() {
    super()

    this.state = {
      units: []
    }
  }

  addUnit() {
    engine.boardState.addUnit()
    this.setState({
      units: engine.boardState.getUnits().map(() => <Unit key={generateUUID()} />)
    })
  }

  render() {
    return (
      <TouchableHighlight style={styles.block} onPress={this.addUnit.bind(this)}>
        <View style={{alignItems: "center"}}>
          <Text style={styles.button}>Spawnaa</Text>
          {this.state.units}
        </View>
      </TouchableHighlight>
    )
  }

}
