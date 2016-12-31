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
      showScreen: GameStates.UNSTARTED
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
    if (engine.state !== this.state.showScreen) {
      this.setState({
        showScreen: engine.state
      })
    }
  }



  render() {
    return <View style={[styles.centerContent, styles.background]}>

      <StartStateScene
        show={this.state.showScreen === GameStates.UNSTARTED}
        onClose={() => this.startGame()}
      />
      <EndStateScene
        show={this.state.showScreen === GameStates.WON || this.state.showScreen === GameStates.LOST}
        onClose={() => this.restartGame()}
      />
      <TouchableHeadquarters styles={{alignItems: "flex-end"}}/>
      <View style={{
        flex: 0.5,
        borderWidth: 1,
        borderColor: "#FCFCFC"
      }}>
        <UnitContainer />
      </View>
      <TouchableHeadquarters styles={{alignItems: "flex-start"}}/>
    </View>
  }
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
