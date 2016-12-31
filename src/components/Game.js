import React, {Component} from "react"
import {View, TouchableHighlight} from "react-native"
import Headquarters from "./Headquarters"
import UnitContainer from "./UnitContainer"
import StartStateScene from "./StartStateScene"
import EndStateScene from "./EndStateScene"
import styles from "../styles"
import engine from "../gameLogic/Engine"
import GameStates from "../gameLogic/GameStates"

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

  shouldShowEndScene() {
    return this.state.engineState === GameStates.WON || this.state.engineState === GameStates.LOST
  }

  shouldShowGameScene() {
    return this.state.engineState === GameStates.IN_PROGRESS
  }

  render() {
    return <View style={[styles.centerContent, styles.background]}>

      <StartStateScene
        show={this.shouldShowStartScene()}
        onClose={() => this.startGame()}
      />
      <EndStateScene
        show={this.shouldShowEndScene()}
        onClose={() => this.restartGame()}
      />
      <GameScene show={this.shouldShowGameScene()} />
    </View>
  }
}

function GameScene(props) {
  return (
    <View style={{opacity: Number(props.show)}}>
      <TouchableHeadquarters styles={{alignItems: "flex-end"}}/>
      <View style={{
        flex: 0.5,
        alignSelf: "stretch"
      }}>
        <UnitContainer />
      </View>
      <TouchableHeadquarters styles={{alignItems: "flex-start"}}/>
    </View>
  )
}

GameScene.propTypes = {
  show: React.PropTypes.bool
}

function TouchableHeadquarters(props) {

  return (
    <TouchableHighlight
      style={[{
        flex: 0.25,
        flexDirection: "row",
      }, props.styles]}
      onPress={props.onPress}
    >
      <View>
        <Headquarters />
      </View>
    </TouchableHighlight>
  )
}

TouchableHeadquarters.propTypes = {
  onPress: React.PropTypes.func,
  styles: React.PropTypes.object
}
