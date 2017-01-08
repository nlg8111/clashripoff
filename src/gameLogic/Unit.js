import {generateUUID} from "../utils"

export default class Unit {

  constructor(player, movementPattern) {
    this.player = player
    this.movementPattern = movementPattern
    this.alive = true
    this.hitBox = 0.05
    this.uuid = generateUUID()
  }

  advance() {
    this.movementPattern.step()
  }

  getLocation() {
    return this.movementPattern.getCurrentLocation()
  }

  getPlayer() {
    return this.player
  }

  kill() {
    this.alive = false
  }

  isAlive() {
    return this.alive
  }

  collidesWith(unitB) {
    return Math.abs(this.getLocation() - unitB.getLocation()) <= this.hitBox
  }

  hasReachedDestination() {
    return this.movementPattern.isAtDestination()
  }
}
