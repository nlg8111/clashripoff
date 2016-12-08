export default class Unit {

  constructor(movementPattern) {
    this.movementPattern = movementPattern
  }

  advance() {
    this.movementPattern.step()
  }

}
