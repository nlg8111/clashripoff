import BoardState from "./BoardState"
import Ticker from "./Ticker"

class Engine {

  constructor() {
    this.boardState = new BoardState()
    this.ticker = new Ticker(this.tick.bind(this))
  }

  start() {
    this.ticker.start()
  }

  tick() {
    this.boardState.advanceUnits()
  }

}

export default new Engine()
