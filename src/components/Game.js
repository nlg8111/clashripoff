import React, {Component} from "react"
import {View, TouchableHighlight} from "react-native"
import Headquarters from "./Headquarters"
import UnitContainer from "./UnitContainer"
import StartStateScene from "./StartStateScene"
import EndStateScene from "./EndStateScene"
import styles from "../styles"
import engine from "../gameLogic/Engine"

export default class Game extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showStartScreen: true,
      showEndScreen: false
    }
  }

  startGame() {
    engine.start.bind(engine)()
    this.setState({showStartScreen: false, showEndScreen: false})
  }

  endGame() {
    this.setState({showStartScreen: false, showEndScreen: true})
  }

  render() {
    return <View style={[styles.centerContent, styles.background]}>

      <StartStateScene
        show={this.state.showStartScreen}
        onClose={() => this.startGame()}
      />
      <EndStateScene
        show={this.state.showEndScreen}
      />
    <TouchableHeadquarters onPress={() => this.endGame()} />
      <View>
          <UnitContainer />
      </View>
      <TouchableHeadquarters onPress={() => this.endGame()} />
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
