import BoardState from "./BoardState"
import Ticker from "./Ticker"
import Player from "./Player"
import Unit from "./Unit"
import MovementPattern from "./MovementPattern"
import ArtificialIntelligence from "./ArtificialIntelligence"
import GameStates from "./GameStates"

class Engine {

  constructor() {
    this.initialize()
    this.views = []
  }

  initialize() {
    this.state = GameStates.UNSTARTED

    this.ticker = new Ticker(this.tick.bind(this))

    this.human = new Player("rgba(0, 255, 0, 0.15)", 0.0)
    this.computer = new Player("rgba(255, 0, 0, 0.15)", 1.0)
    this.computerAi = new ArtificialIntelligence(this.spawnEnemyUnit.bind(this))

    this.boardState = new BoardState()
  }

  start() {
    this.ticker.start()
    this.state = GameStates.IN_PROGRESS
  }

  reset() {
    this.initialize()
  }

  tick() {
    this.boardState.advanceUnits()
    this.boardState.killCombattingUnits()
    this.boardState.removeDeadUnits()
    this.checkForGameOverConditions()
    this.computerAi.tick()
    this.views.forEach(v => v.update())
  }

  checkForGameOverConditions() {
    let unitsReachedOpposingCastle = this.boardState.getUnits().filter(u => u.hasReachedDestination())
    if (unitsReachedOpposingCastle.length >= 1) {
      if (unitsReachedOpposingCastle[0].player === this.human) {
        this.state = GameStates.WON
      }
      else {
        this.state = GameStates.LOST
      }
      this.ticker.stop()
    }
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
