import React, {Component} from "react"
import {View, Image} from "react-native"
import styles from "../styles"
import unit1 from "../assets/player_1_static.png"

let centerX = 0

export default class Unit extends Component {

  constructor() {
    super()
  }

  storeCenter(event) {
    centerX = event.nativeEvent.layout.width / 2
  }

  render() {
    return <View style={[styles.unit, {
      left: this.props.position - centerX,
    }]}>
      <Image
        source={unit1}
        style={{
          resizeMode: "contain",
          top: 0,
          left: 0
        }}
        onLayout={this.storeCenter.bind(this)}
      />
      <Image
        source={unit1}
        style={[{
          position: "absolute",
          resizeMode: "contain",
          top: 0,
          left: 0,
          tintColor: this.props.color
        }]}
        onLayout={this.storeCenter.bind(this)}
      />
    </View>
  }
}

Unit.propTypes = {
  position: React.PropTypes.number,
  color: React.PropTypes.string
}
