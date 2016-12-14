import React, {Component} from "react"
import {View, TouchableHighlight} from "react-native"
import Headquarters from "./Headquarters"
import UnitContainer from "./UnitContainer"
import EndStateScene from "./EndStateScene"
import styles from "../styles"
import engine from "../gameLogic/Engine"

export default class Game extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showEndStateScene: false
    }

    engine.start()

  }

  toggleEndStateScene() {
    this.setState({
      showEndStateScene: !this.state.showEndStateScene
    })
  }

  render() {
    return <View style={[styles.centerContent, styles.background]}>
      <EndStateScene
        show={this.state.showEndStateScene}
        onClose={() => this.toggleEndStateScene()}
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