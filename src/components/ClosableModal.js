import React from 'react'
import {View, Text, Modal, TouchableHighlight} from 'react-native'
import styles from '../styles'

export default class ClosableModal extends React.Component {
  render () {
    const buttonText = this.props.buttonText || 'Close'

    return (
      <Modal
        animationType={'fade'}
        transparent={false}
        visible={this.props.show}
        onRequestClose={() => {
        }}
      >
        <View style={[styles.centerContent, styles.background]}>
          {this.props.children}

          {this.props.onClose ? (
            <TouchableHighlight onPress={() => {
              this.props.onClose()
            }}>
              <Text style={styles.button}>{buttonText}</Text>
            </TouchableHighlight>
            ) : ''}
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
