import React, {Component} from "react"
import { AppState, View} from "react-native"
import StartStateScene from "./StartStateScene"
import EndStateScene from "./EndStateScene"
import Map from "./Map"
import styles from "../styles"
import engine from "../gameLogic/Engine"
import GameStates from "../gameLogic/GameStates"
import ClosableModal from "./ClosableModal"
import backgroundMusic from "./BackgroundMusic"
import GameServer from "../services/GameServer"

export default class Game extends Component {
  constructor(props) {
    super(props)

    engine.attachView(this)
    this.gameServer = new GameServer("ws://localhost:3000")
    this.state = {
      engineState: engine.state,
      appState: AppState.currentState
    }

  }

  componentDidMount() {
    backgroundMusic.play()
    AppState.addEventListener("change", this._handleAppStateChange.bind(this))

    this.gameServer.connect()
    this.gameServer.subscribe(console.log)
  }

  componentWillUnmount() {
    AppState.removeEventListener("change", this._handleAppStateChange.bind(this))
  }

  _handleAppStateChange(nextAppState) {
    if (this.state.appState.match(/inactive|background/) && nextAppState === "active") {
      backgroundMusic.play()
    }
    else {
      backgroundMusic.pause()
    }
    this.setState({appState: nextAppState})
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
