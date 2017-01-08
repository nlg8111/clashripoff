import React, {Component} from "react"
import {View} from "react-native"
import StartStateScene from "./StartStateScene"
import EndStateScene from "./EndStateScene"
import Map from "./Map"
import styles from "../styles"
import engine from "../gameLogic/Engine"
import GameStates from "../gameLogic/GameStates"
import ClosableModal from "./ClosableModal"

export default class Game extends Component {
  constructor(props) {
    super(props)

    engine.attachView(this)

    this.state = {
      engineState: engine.state
    }
  }

  startGame() {
    engine.start.bind(engine)()
  }

  restartGame() {
    engine.reset.bind(engine)()
    this.startGame()
  }

  update() {
    if (engine.state !== this.state.engineState) {
      this.setState({
        engineState: engine.state
      })
    }
  }

  shouldShowStartScene() {
    return this.state.engineState === GameStates.UNSTARTED
  }

  shouldShowWinScene() {
    return this.state.engineState === GameStates.WON
  }

  shouldShowLossScene() {
    return this.state.engineState === GameStates.LOST
  }

  shouldShowGameScene() {

    return this.state.engineState === GameStates.IN_PROGRESS
  }

  render() {
    return <View style={[styles.centerContent, styles.background]}>
      <ClosableModal
        show={this.shouldShowStartScene()}
        onClose={() => this.startGame()}
        buttonText="Start"
      >
        <StartStateScene />
      </ClosableModal>

      <ClosableModal
        show={this.shouldShowWinScene()}
        onClose={() => this.restartGame()}
        buttonText="New match!"
      >
        <EndStateScene message="YOU SHOWED THEM, ALLRIGHT!" />
      </ClosableModal>

      <ClosableModal
        show={this.shouldShowLossScene()}
        onClose={() => this.restartGame()}
        buttonText="Try again"
      >
        <EndStateScene message="Oh no, the AI beat you :(" />
      </ClosableModal>

      <Map show={this.shouldShowGameScene()} />
    </View>
  }
}
