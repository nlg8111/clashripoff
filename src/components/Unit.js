import React, {Component} from 'react'
import {View, Image} from 'react-native'
import styles from '../styles'
import unit1 from '../assets/player_1_static.png'

let centerX = 0
let centerY = 0

export default class Unit extends Component {
  storeCenter (event) {
    centerX = event.nativeEvent.layout.width / 2
    centerY = event.nativeEvent.layout.height / 2
  }

  render () {
    return <View
      style={[styles.unit, {
        left: this.props.position.x - centerX,
        top: this.props.position.y - centerY
      }]}
      onLayout={this.storeCenter.bind(this)}
    >
      <UnitImage source={unit1} direction={this.props.direction} tint={this.props.color} />
    </View>
  }
}

Unit.propTypes = {
  position: React.PropTypes.shape({
    x: React.PropTypes.number,
    y: React.PropTypes.number
  }),
  direction: React.PropTypes.oneOf(['right', 'left']),
  color: React.PropTypes.string
}

function UnitImage (props) {
  const unitStyle = [
    styles.fillContainer,
    {
      resizeMode: 'contain',
      transform: [{
        scaleX: props.direction === 'right' ? 1 : -1
      }]
    }
  ]

  return (
    <View style={styles.fillContainer}>
      <Image
        source={props.source}
        style={[unitStyle]}
      />
      <Image
        source={props.source}
        style={[unitStyle, {
          tintColor: props.tint
        }]}
      />
    </View>
  )
}

UnitImage.propTypes = {
  source: React.PropTypes.number,
  tint: React.PropTypes.string,
  direction: React.PropTypes.oneOf(['right', 'left'])
}
