import BoardState from "./BoardState"
import Ticker from "./Ticker"
import Player from "./Player"
import Unit from "./Unit"
import MovementPattern from "./MovementPattern"
import ArtificialIntelligence from "./ArtificialIntelligence"

class Engine {

  constructor() {
    this.ticker = new Ticker(this.tick.bind(this))

    this.human = new Player("rgb(0, 255, 0)", 0.0)
    this.computer = new Player("rgb(255, 0, 0)", 1.0)
    this.computerAi = new ArtificialIntelligence(this.spawnEnemyUnit.bind(this))

    this.boardState = new BoardState()
    this.views = []
  }

  start() {
    this.ticker.start()
  }

  tick() {
    this.boardState.advanceUnits()
    this.computerAi.tick()
    this.views.forEach(v => v.update())
  }

  spawnFriendlyUnit() {
    this.boardState.addUnit(new Unit(this.human, new MovementPattern(this.human.hqLocation, this.computer.hqLocation)))
  }

  spawnEnemyUnit() {
    this.boardState.addUnit(new Unit(this.computer, new MovementPattern(this.computer.hqLocation, this.human.hqLocation)))
  }

  attachView(view) {
    this.views.push(view)
  }

}

export default new Engine()
