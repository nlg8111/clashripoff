import React from "react"
import {Image, View} from "react-native"
import Lane from "./Lane"
import Headquarters from "./Headquarters"
import singleLineMap from "../assets/map_single_line.png"
import styles from "../styles"
import Touchable from "./Touchable"
import GameServer from "../services/GameServer"

export default class Map extends React.Component {
  constructor() {
    super()
    this.width = 0
    this.height = 0
  }

  storeSize(event) {
    this.width = event.nativeEvent.layout.width
    this.height = event.nativeEvent.layout.height
  }

  progressToHorizontalLane(progress) {
    const margins = 35
    const centerY = this.height / 2
    const verticalOffset = 30

    return {
      x: progress * (this.width - margins * 2) + margins,
      y: centerY + verticalOffset
    }
  }

  render() {
    return <Image
      source={singleLineMap}
      style={[styles.backgroundImage, {opacity: Number(this.props.show), flexDirection: "row"}]}
      onLayout={this.storeSize.bind(this)}
    >
      <Lane progressToPosition={this.progressToHorizontalLane.bind(this)}/>
      <TouchableHeadquarters style={{justifyContent: "flex-start"}} onPress={() => GameServer.spawnFriendlyUnit() }/>
      <TouchableHeadquarters style={{justifyContent: "flex-end"}} onPress={() => GameServer.spawnEnemyUnit() }/>
    </Image>
  }
}

Map.propTypes = {
  show: React.PropTypes.bool
}

function TouchableHeadquarters(props) {

  return (
    <View
      style={[{
        flex: 1,
        flexDirection: "row",
        marginTop: -40
      }, props.style]}>
      <Touchable onPress={props.onPress}>
        <Headquarters />
      </Touchable>
    </View>
  )
}

TouchableHeadquarters.propTypes = {
  onPress: React.PropTypes.func,
  style: React.PropTypes.object
}
