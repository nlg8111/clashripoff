import React from "react"
import {View, TouchableHighlight} from "react-native"
import UnitContainer from "./UnitContainer"
import Headquarters from "./Headquarters"

export default class GameScene extends React.Component {

  render() {
    return <View style={{opacity: Number(this.props.show)}}>
        <TouchableHeadquarters styles={{alignItems: "flex-end"}}/>
        <View style={{
          flex: 0.5,
          alignSelf: "stretch"
        }}>
          <UnitContainer />
        </View>
        <TouchableHeadquarters styles={{alignItems: "flex-start"}}/>
      </View>
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
