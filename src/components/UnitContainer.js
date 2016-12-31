import React, {Component} from "react"
import {TouchableHighlight, Text, View} from "react-native"
import Unit from "./Unit"
import {generateUUID} from "../utils"
import styles from "../styles"
import engine from "../gameLogic/Engine"

export default class UnitContainer extends Component {

  constructor() {
    super()
    this.height = 0

    engine.attachView(this)

    this.state = {
      units: []
    }
  }

  update() {
    this.setState({
      units: engine.boardState.getUnits().map(unit =>
        <Unit
          position={unit.getLocation() * this.height}
          color={unit.player.color}
          key={generateUUID()}
        />
      )
    })

    if(this.hasUnitReachedCastle()) {
      this.props.onUnitReachCastle()
    }
  }

  storeHeight(event) {
    this.height = event.nativeEvent.layout.height
  }

  hasUnitReachedCastle() {
    return engine.boardState
        .getUnits()
        .filter(u => u.hasReachedDestination())
        .length >= 1
  }

  addUnit() {
    engine.spawnFriendlyUnit()
  }

  render() {
    return (
      <TouchableHighlight style={styles.block} onPress={this.addUnit.bind(this)} onLayout={this.storeHeight.bind(this)}>
        <View style={styles.centerContent}>
          <Text style={styles.button}>Spawn unit</Text>
          {this.state.units}
        </View>
      </TouchableHighlight>
    )
  }
}

UnitContainer.propTypes = {
  onUnitReachCastle: React.PropTypes.func
}
