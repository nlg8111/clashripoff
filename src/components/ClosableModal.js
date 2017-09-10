import React from "react"
import PropTypes from "prop-types"
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
  children: PropTypes.node.isRequired,
  show: PropTypes.bool.isRequired,

  buttonText: PropTypes.string,
  onClose: PropTypes.func
}
