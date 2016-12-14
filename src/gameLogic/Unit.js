export default class Unit {

  constructor(player, movementPattern) {
    this.player = player
    this.movementPattern = movementPattern
  }

  advance() {
    this.movementPattern.step()
  }

}
