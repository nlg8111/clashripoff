import React from "react"
import {View, TouchableWithoutFeedback} from "react-native"
import stylePropType from "react-style-proptype"

export default function Touchable(props) {
  return (
    <TouchableWithoutFeedback
      onPress={props.onPress}
    >
      <View style={props.style}>
        {props.children}
      </View>
    </TouchableWithoutFeedback>
  )
}

Touchable.propTypes = {
  onPress: React.PropTypes.func,
  style: stylePropType.supportingArrays,
  children: React.PropTypes.node
}
