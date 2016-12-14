export default class BoardState {

  constructor() {
    this.units = []
  }

  addUnit(unit) {
    this.units.push(unit)
  }

  getUnits() {
    return this.units
  }

  advanceUnits() {
    this.units.forEach((u) => u.advance())
  }

  getCollidingUnits() {
    let collisions = []

    this.units.sort(this.sortByLocation)

    for (let i = 1; i < this.units.length; i++) {
      if (this.units[i - 1].collidesWith(this.units[i])) {
        collisions.push(this.units[i - 1])
        collisions.push(this.units[i])
      }
    }

    return [...new Set(collisions)]
  }

  killCollidedUnits() {
    this.getCollidingUnits().forEach((u) => u.kill())
  }

  sortByLocation(a, b) {
    return a.getLocation() > b.getLocation()
  }

  removeDeadUnits() {
    this.units = this.units.filter(unit => {
      return unit.isAlive()
    })
  }

}
