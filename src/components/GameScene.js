import React from "react"
import {Image, View, TouchableHighlight} from "react-native"
import UnitContainer from "./UnitContainer"
import Headquarters from "./Headquarters"
import singleLineMap from "../assets/map_single_line.png"
import styles from "../styles"

export default class GameScene extends React.Component {

  render() {
    return <Image source={singleLineMap} style={[styles.backgroundImage, {opacity: Number(this.props.show), flexDirection: "row"}]}>
        <TouchableHeadquarters style={{justifyContent: "flex-start"}}/>
        <TouchableHeadquarters style={{justifyContent: "flex-end"}}/>
        <UnitContainer />
      </Image>
  }
}

GameScene.propTypes = {
  show: React.PropTypes.bool
}

function TouchableHeadquarters(props) {

  return (
    <TouchableHighlight
      style={[{
        flex: 1,
        flexDirection: "row",
      }, props.style]}
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
  style: React.PropTypes.object
}
