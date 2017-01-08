import React, {Component} from "react"
import {View} from "react-native"
import styles from "../styles"

export default class SizeAwareComponent extends Component {
  constructor() {
    super()
    this.width = 0
    this.height = 0
  }

  storeSize(event) {
    this.width = event.nativeEvent.layout.width
    this.height = event.nativeEvent.layout.height
  }

  render() {
    return <View style={styles.fillContainer} onLayout={this.storeSize.bind(this)}>
      {this.renderMapContent()}
    </View>
  }
}
