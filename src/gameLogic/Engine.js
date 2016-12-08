import BoardState from "./BoardState"
import Ticker from "./Ticker"
import Player from "./Player"
import Unit from "./Unit"
import MovementPattern from "./MovementPattern"

class Engine {

  constructor() {
    this.human = new Player("rgb(0, 255, 0)", 0.0)
    this.computer = new Player("rgb(255, 0, 0)", 1.0)

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

  spawnFriendlyUnit() {
    this.boardState.addUnit(new Unit(new MovementPattern(this.human.hqLocation, this.computer.hqLocation)))
  }

  spawnEnemyUnit() {
    this.boardState.addUnit(new Unit(new MovementPattern(this.computer.hqLocation, this.human.hqLocation)))
  }

  attachView(view) {
    this.views.push(view)
  }

}

export default new Engine()
