export default class Unit {

  constructor(player, movementPattern) {
    this.player = player
    this.movementPattern = movementPattern
    this.alive = true
  }

  advance() {
    this.movementPattern.step()
  }

  getLocation() {
    return this.movementPattern.getCurrentLocation()
  }

  kill() {
    this.alive = false
  }

  isAlive() {
    return this.alive
  }

}
