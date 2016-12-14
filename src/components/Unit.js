import React, {Component} from "react"
import {View} from "react-native"
import styles from "../styles"

export default class Unit extends Component {

  constructor() {
    super()
  }

  render() {
    return <View style={[styles.unit, {bottom: this.props.progress * 100}, {borderColor: this.props.color}]} />
  }
}

Unit.propTypes = {
  progress: React.PropTypes.number,
  color: React.PropTypes.string
}
