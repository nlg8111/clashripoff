import React from "react"
import PropTypes from "prop-types"
import {Text, TouchableHighlight} from "react-native"
import styles from "../styles"

export default class TextButton extends React.Component {
  render() {
    return (
      <TouchableHighlight onPress={this.props.onPress}>
        <Text style={styles.button}>{this.props.text}</Text>
      </TouchableHighlight>
    )
  }
}

TextButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}
