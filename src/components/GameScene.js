import React from "react"
import {Image, View, TouchableHighlight} from "react-native"
import UnitContainer from "./UnitContainer"
import Headquarters from "./Headquarters"
import singleLineMap from "../assets/map_single_line.png"
import styles from "../styles"

export default class GameScene extends React.Component {

  render() {
    return <Image source={singleLineMap} style={[styles.backgroundImage, {opacity: Number(this.props.show)}]}>
        <TouchableHeadquarters styles={{alignItems: "flex-end"}}/>
        <View style={{
          flex: 0.5,
          alignSelf: "stretch"
        }}>
          <UnitContainer />
        </View>
        <TouchableHeadquarters styles={{alignItems: "flex-start"}}/>
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
