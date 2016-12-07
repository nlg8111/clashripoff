import BoardState from "./BoardState"
import Ticker from "./Ticker"

class Engine {

  constructor() {
    this.boardState = new BoardState()
    this.ticker = new Ticker(this.tick.bind(this))
    this.views = []
  }

  start() {
    this.ticker.start()
  }

  tick() {
    this.boardState.advanceUnits()
    this.views.forEach(v => v.update())
  }

  attachView(view) {
    this.views.push(view)
  }

}

export default new Engine()
