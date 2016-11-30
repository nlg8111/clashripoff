import React from "react"
import {
  Modal,
  TouchableHighlight,
  View,
  Text,
  StyleSheet
} from "react-native"

export default class EndStateScene extends React.Component {
  render() {
    const message = "The game has ended!"

    return (
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={this.props.show}
        onRequestClose={() => {}}
      >
        <View style={styles.container}>
          <Text style={styles.message}>{ message }</Text>

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000000",
  },
  message: {
    color: "#FFFFFF"
  },
  button: {
    padding: 10,
    marginTop: 20,
    fontSize: 20,
    borderWidth: 0.5,
    borderColor: "#FFFFFF",
    color: "#FFFFFF"
  }
})

EndStateScene.propTypes = {
  show: React.PropTypes.bool,
  onClose: React.PropTypes.func
}
