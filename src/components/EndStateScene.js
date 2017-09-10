import React from "react"
import PropTypes from "prop-types"
import {
  Text
} from "react-native"
import styles from "../styles"

export default class EndStateScene extends React.Component {
  render() {
    const message = this.props.message || "The game has ended!"

    return (
        <Text style={styles.text}>{ message }</Text>
    )
  }
}

EndStateScene.propTypes = {
  message: PropTypes.string
}
