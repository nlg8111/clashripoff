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

  killCollidedUnits() {
    this._getCollidingUnits().forEach((u) => u.kill())
  }

  sortByLocation(a, b) {
    return a.getLocation() > b.getLocation()
  }

  removeDeadUnits() {
    this.units = this.units.filter(unit => {
      return unit.isAlive()
    })
  }

  _getCollidingUnits() {
    let collisions = new Set()

    let unitsSortedByProgress = this.units.slice(0).sort(this.sortByLocation)

    for (let i = 1; i < unitsSortedByProgress.length; i++) {
      let unitExamined = unitsSortedByProgress[i]
      for (let u = i-1; u >= 0; u--) {
        let possibleCollision = unitsSortedByProgress[u]

        if (unitExamined.getPlayer() === possibleCollision.getPlayer()) {
          continue
        }

        if (unitExamined.collidesWith(possibleCollision)) {
          collisions.add(unitExamined)
          collisions.add(possibleCollision)
        }
        else {
          break
        }
      }
    }

    return collisions
  }

}
