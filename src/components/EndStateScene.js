import React from "react"
import {
  Modal,
  TouchableHighlight,
  View,
  Text
} from "react-native"
import styles from "../styles"

export default class EndStateScene extends React.Component {
  render() {
    const message = "The game has ended!"

    return (
      <Modal
        animationType={"fade"}
        transparent={false}
        visible={this.props.show}
        onRequestClose={() => {}}
      >
        <View style={[styles.centerContent, styles.background]}>
          <Text style={styles.text}>{ message }</Text>

          <TouchableHighlight onPress={() => {
            this.props.onClose()
          }}>
            <Text style={styles.button}>Close</Text>
          </TouchableHighlight>
        </View>
      </Modal>
    )
  }
}

EndStateScene.propTypes = {
  show: React.PropTypes.bool,
  onClose: React.PropTypes.func
}
