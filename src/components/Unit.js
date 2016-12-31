import React, {Component} from "react"
import {View} from "react-native"
import styles from "../styles"

let centerY = 0

export default class Unit extends Component {

  constructor() {
    super()
  }

  storeCenter(event) {
    centerY = event.nativeEvent.layout.height / 2
  }

  render() {
    return <View
      style={[styles.unit, {bottom: this.props.position - centerY, position: "absolute" }, {borderColor: this.props.color}]}
      onLayout={this.storeCenter.bind(this)}
      />
  }
}

Unit.propTypes = {
  position: React.PropTypes.number,
  color: React.PropTypes.string
}
