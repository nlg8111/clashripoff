import React, {Component} from "react"
import {View} from "react-native"
import styles from "../styles"

export default class Unit extends Component {

  constructor() {
    super()
  }

  render() {
    return <View
      style={[styles.unit, {bottom: this.props.position, position: "absolute" }, {borderColor: this.props.color}]}
      />
  }
}

Unit.propTypes = {
  position: React.PropTypes.number,
  color: React.PropTypes.string
}
