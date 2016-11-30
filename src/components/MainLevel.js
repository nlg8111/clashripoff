import React, {Component} from "react"
import {View, StyleSheet, TouchableHighlight} from "react-native"
import Headquarters from "./Headquarters"
import EndStateScene from "./EndStateScene"

export default class MainLevel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showEndStateScene: false
    }
  }

  toggleEndStateScene() {
    this.setState({
      showEndStateScene: !this.state.showEndStateScene
    })
  }

  render() {
    return <View style={styles.level}>
      <EndStateScene
        show={this.state.showEndStateScene}
        onClose={() => this.toggleEndStateScene()}
      />
      <TouchableHeadquarters onPress={() => this.toggleEndStateScene()} />
      <TouchableHeadquarters onPress={() => this.toggleEndStateScene()} />
    </View>
  }
}

function TouchableHeadquarters(props) {

  return (
    <TouchableHighlight
      style={styles.levelSide}
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

const styles = StyleSheet.create({
  level: {
    backgroundColor: "black",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  levelSide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
})
