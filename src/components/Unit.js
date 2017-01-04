import React, {Component} from "react"
import {Image} from "react-native"
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
    return <Image
      source={unit1}
      style={[styles.unit, {left: this.props.position - centerX, position: "absolute" }, {borderColor: this.props.color}]}
      onLayout={this.storeCenter.bind(this)}
      />
  }
}

Unit.propTypes = {
  position: React.PropTypes.number,
  color: React.PropTypes.string
}
