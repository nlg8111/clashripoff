import React, {Component} from "react"
import {AppState, View} from "react-native"
import StartStateScene from "./StartStateScene"
import EndStateScene from "./EndStateScene"
import Map from "./Map"
import styles from "../styles"
import engine from "../gameLogic/Engine"
import GameStates from "../gameLogic/GameStates"
import ClosableModal from "./ClosableModal"
import backgroundMusic from "./BackgroundMusic"
import GameServer from "../services/GameServer"
import TextButton from "./TextButton"

export default class Game extends Component {
  constructor(props) {
    super(props)

    engine.attachView(this)
    this.state = {
      engineState: engine.state,
      appState: AppState.currentState,
      inMultiplayer: false
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
      >
        <StartStateScene />
        <TextButton onPress={() => this.spectate()} text="Online" />
        <TextButton onPress={() => this.startGame()} text="Single" />
      </ClosableModal>

      <ClosableModal
        show={this.shouldShowWinScene()}
      >
        <EndStateScene message="YOU SHOWED THEM, ALLRIGHT!" />
        <TextButton onPress={() => GameServer.start()} text="New match!" />
      </ClosableModal>

      <ClosableModal
        show={this.shouldShowLossScene()}
      >
        <EndStateScene message="Oh no, the AI beat you :(" />
        <TextButton onPress={() => GameServer.start()} text="Try again" />
      </ClosableModal>

      <Map onFriendlyPress={() => this.handleFriendlyPress()} show={this.shouldShowGameScene()} />
    </View>
  }

  handleFriendlyPress() {
    if(this.state.inMultiplayer) {
      GameServer.spawnFriendlyUnit()
    } else {
      engine.spawnFriendlyUnit()
    }
  }

  spectate() {
    this.setState({inMultiplayer: true})
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
