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
    engine.stop.bind(engine)()
    this.setState({showStartScreen: false, showEndScreen: true})
  }

  restartGame() {
    engine.reset.bind(engine)()
    this.startGame()
  }

  render() {
    return <View style={[styles.centerContent, styles.background]}>

      <StartStateScene
        show={this.state.showStartScreen}
        onClose={() => this.startGame()}
      />
      <EndStateScene
        show={this.state.showEndScreen}
        onClose={() => this.restartGame()}
      />
      <TouchableHeadquarters styles={{alignItems: "flex-end"}}/>
      <View style={{
        flex: 0.5,
        alignSelf: "stretch"
      }}>
        <UnitContainer onUnitReachCastle={() => this.endGame()}/>
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
