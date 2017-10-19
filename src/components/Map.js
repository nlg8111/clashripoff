import React from 'react'
import { Image } from 'react-native'
import Lane from './Lane'
import singleLineMap from '../assets/map_single_line.png'
import styles from '../styles'
import Touchable from './Touchable'
import engine from '../gameLogic/Engine'

export default class Map extends React.Component {
  constructor () {
    super()
    this.width = 0
    this.height = 0
  }

  storeSize (event) {
    this.width = event.nativeEvent.layout.width
    this.height = event.nativeEvent.layout.height
  }

  progressToVerticalLine (progress) {
    const margins = 35
    const centerX = this.width / 2
    const horizontalOffset = 0

    return {
      x: centerX + horizontalOffset,
      y: this.height - (progress * (this.height + margins * 2) - margins)
    }
  }

  render () {
    return <Image
      source={singleLineMap}
      style={[styles.backgroundImage, {
        opacity: Number(this.props.show),
        flexDirection: 'column'
      }]}
      onLayout={this.storeSize.bind(this)}
    >
      <Lane progressToPosition={this.progressToVerticalLine.bind(this)} />
      <UnitSpawnArea onPress={() => engine.spawnFriendlyUnit()} />
    </Image>
  }
}

Map.propTypes = {
  show: React.PropTypes.bool
}

function UnitSpawnArea (props) {
  return (
      <Touchable onPress={props.onPress} style={[{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 80,
        backgroundColor: "rgba(255, 0, 0, 0.2)",
      }, props.style]}>
      </Touchable>
  )
}

UnitSpawnArea.propTypes = {
  onPress: React.PropTypes.func,
  style: React.PropTypes.object
}
