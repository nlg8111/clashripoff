import React, {Component} from "react"
import {View, TouchableHighlight} from "react-native"
import Headquarters from "./Headquarters"
import UnitContainer from "./UnitContainer"
import StartStateScene from "./StartStateScene"
import EndStateScene from "./EndStateScene"
import styles from "../styles"
import engine from "../gameLogic/Engine"
import gameState from "../gameLogic/GameState"

export default class Game extends Component {
  constructor(props) {
    super(props)

    engine.attachView(this)
  }

  update() {
    this.setState({})
  }

  render() {
    return <View style={[styles.centerContent, styles.background]}>

      <StartStateScene
        show={engine.currentState === gameState.START_SCREEN}
        onClose={engine.start.bind(engine)}
      />
      <EndStateScene
        show={engine.currentState === gameState.END_SCREEN}
      />
      <TouchableHeadquarters onPress={() => this.toggleEndStateScene()} />
      <View>
          <UnitContainer />
      </View>
      <TouchableHeadquarters onPress={() => this.toggleEndStateScene()} />
    </View>
  }
}

function TouchableHeadquarters(props) {

  return (
    <TouchableHighlight
      style={styles.centerContent}
      onPress={props.onPress}
    >
      <View>
        <Headquarters />
      </View>
    </TouchableHighlight>
  )
}

TouchableHeadquarters.propTypes = {
  onPress: React.PropTypes.func
}
