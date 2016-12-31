import React from "react"
import {
  Modal,
  TouchableHighlight,
  View,
  Text,
  Image
} from "react-native"
import styles from "../styles"

export default class StartStateScene extends React.Component {
  render() {

    return (
      <Modal
        animationType={"fade"}
        transparent={false}
        visible={this.props.show}
        onRequestClose={() => {}}
      >
        <View style={[styles.centerContent, styles.background]}>
          <Image
            source={require("../../resources/logo.png")}
            style={{width: 200, height: 300}}
            />

          <TouchableHighlight onPress={() => {
            this.props.onClose()
          }}>
            <Text style={styles.button}>Start</Text>
          </TouchableHighlight>
        </View>
      </Modal>
    )
  }
}

StartStateScene.propTypes = {
  show: React.PropTypes.bool,
  onClose: React.PropTypes.func
}
