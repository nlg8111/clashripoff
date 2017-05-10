import React from "react"
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
  onPress: React.PropTypes.func.isRequired,
  text: React.PropTypes.string.isRequired
}
