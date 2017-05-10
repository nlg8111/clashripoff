import React from "react"
import {View, Modal} from "react-native"
import styles from "../styles"

export default class ClosableModal extends React.Component {
  render() {
    return (
      <Modal
        animationType={"fade"}
        transparent={false}
        visible={this.props.show}
        onRequestClose={() => {
        }}
      >
        <View style={[styles.centerContent, styles.background]}>
          {this.props.children}
        </View>
      </Modal>
    )
  }
}

ClosableModal.propTypes = {
  children: React.PropTypes.node.isRequired,
  show: React.PropTypes.bool.isRequired,

  buttonText: React.PropTypes.string,
  onClose: React.PropTypes.func
}
