import React from "react"
import {Image, View} from "react-native"
import Lane from "./Lane"
import Headquarters from "./Headquarters"
import singleLineMap from "../assets/map_single_line.png"
import styles from "../styles"
import Touchable from "./Touchable"
import Map from "./Map"
import engine from "../gameLogic/Engine"

export default class MapRoadSingleLane extends Map {

  horizontalLane(progress) {
    const margins = 35
    const centerY = this.height / 2
    const verticalOffset = 30
    return {
      x: progress * (this.width - margins * 2) + margins,
      y: centerY + verticalOffset
    }
  }

  renderMapContent() {
    return <Image source={singleLineMap} style={[styles.backgroundImage, {opacity: Number(this.props.show), flexDirection: "row"}]}>
        <Lane progressToPosition={this.horizontalLane.bind(this)}/>
        <TouchableHeadquarters style={{justifyContent: "flex-start"}} onPress={() => engine.spawnFriendlyUnit() }/>
        <TouchableHeadquarters style={{justifyContent: "flex-end"}} onPress={() => engine.spawnEnemyUnit() }/>
      </Image>
  }
}

MapRoadSingleLane.propTypes = {
  show: React.PropTypes.bool
}

function TouchableHeadquarters(props) {

  return (
    <View
      style={[{
        flex: 1,
        flexDirection: "row",
        marginTop: -40
      }, props.style]} >
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
