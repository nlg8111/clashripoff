import React from 'react'
import {
  Image
} from 'react-native'

const gameLogo = require('../../resources/logo.png')

export default class StartStateScene extends React.Component {
  render () {
    return (
      <Image
        source={gameLogo}
        style={{width: 200, height: 300}}
        />
    )
  }
}
