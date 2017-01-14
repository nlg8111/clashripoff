export default class Ticker {
  constructor(fn) {
    this.started = false
    this.callback = fn
  }

  loop() {
    this.callback()
    if(this.started) requestAnimationFrame(this.loop.bind(this))
  }

  start() {
    this.started = true

    requestAnimationFrame(this.loop.bind(this))
  }

  stop() {
    this.started = false
  }
}
