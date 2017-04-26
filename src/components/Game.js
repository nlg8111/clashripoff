import React, {Component} from "react"
import {AppState, Button, View} from "react-native"
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
    this.state = {
      engineState: engine.state,
      appState: AppState.currentState
    }

  }

  componentDidMount() {
    backgroundMusic.play()
    AppState.addEventListener("change", this._handleAppStateChange.bind(this))

    GameServer.connect("ws://clash-ripoff.herokuapp.com")
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
        onClose={() => GameServer.start()}
        buttonText="Start"
      >
        <StartStateScene />
        <Button onPress={() => this.spectate() } title="Spectate" />
      </ClosableModal>

      <ClosableModal
        show={this.shouldShowWinScene()}
        onClose={() => GameServer.start()}
        buttonText="New match!"
      >
        <EndStateScene message="YOU SHOWED THEM, ALLRIGHT!" />
      </ClosableModal>

      <ClosableModal
        show={this.shouldShowLossScene()}
        onClose={() => GameServer.start()}
        buttonText="Try again"
      >
        <EndStateScene message="Oh no, the AI beat you :(" />
      </ClosableModal>

      <Map show={this.shouldShowGameScene()} />
    </View>
  }

  spectate() {
    console.warn("Starting to spectate...")
    GameServer.subscribe("start", () => {
      GameServer.subscribe("spawn", (event) => {
        if(event.team === "friendly") {
          engine.spawnFriendlyUnit()
        } else if (event.team === "enemy") {
          engine.spawnEnemyUnit()
        }
      })
      this.restartGame()
    })
  }
}
