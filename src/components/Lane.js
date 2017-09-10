import React, {Component} from "react"
import PropTypes from "prop-types"
import {View} from "react-native"
import Unit from "./Unit"
import styles from "../styles"
import engine from "../gameLogic/Engine"

export default class Lane extends Component {

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
          position={this.props.progressToPosition(unit.getLocation())}
          direction={unit.player.hqLocation === 0 ? "right" : "left"}
          color={unit.player.color}
          key={unit.uuid}
        />
      )
    })
  }

  render() {
    return (
        <View style={[styles.fillContainer, {
          overflow: "hidden",
        }]}>
          {this.state.units}
        </View>
    )
  }
}

Lane.propTypes = {
  progressToPosition: PropTypes.func
}
