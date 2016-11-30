import React, {Component} from "react"
import {TouchableHighlight, Text, View} from "react-native"
import Unit from "./Unit"
import {generateUUID} from "../utils"
import styles from "../styles"

export default class UnitContainer extends Component {

  constructor() {
    super()

    this.state = {
      units: []
    }
  }

  addUnit() {
    this.setState({
      units: this.state.units.concat(<Unit key={generateUUID()} />)
    })
  }

  render() {
    return (
      <TouchableHighlight style={styles.block} onPress={this.addUnit.bind(this)}>
        <View style={{alignItems: "center"}}>
          <Text style={styles.button}>Spawnaa</Text>
          {this.state.units}
        </View>
      </TouchableHighlight>
    )
  }

}
