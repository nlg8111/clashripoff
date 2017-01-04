import React, {Component} from "react"
import {Image, StyleSheet} from "react-native"
import hq1 from "../assets/player_1_hq.png"

export default class Headquarters extends Component {
  render() {
    return <Image source={hq1} style={[hqStyles.hq]} />
  }
}

const hqStyles = StyleSheet.create({
  hq: {
    width: 83,
    height: 72,
    resizeMode: "contain"
  }
})
