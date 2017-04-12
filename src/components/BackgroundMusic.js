const Sound = require("react-native-sound")

class BackgroundMusic {

  constructor() {
    this.shouldPlay = false
    this.audioTrack = this.buildAudioTrack()
  }

  play() {
    this.audioTrack.play()
    this.shouldPlay = true
  }

  pause() {
    this.audioTrack.pause()
    this.shouldPlay = false
  }

  buildAudioTrack() {
    let track = new Sound("battleinthewinter.mp3", Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.warn("Could not load background music")
        return
      }
      if (this.shouldPlay) {
        track.play()
      }
    })
    track.setNumberOfLoops(-1)
    return track
  }

}

export default new BackgroundMusic()
