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

  removeDeadUnits() {
    this.units = this.units.filter(unit => {
      return unit.isAlive()
    })
  }

  _getCollidingUnits() {
    if (this.units.length < 2) {
      return []
    }

    const playerA = this.units[0].getPlayer()
    const playerAUnits = this.units.filter(u => u.getPlayer() === playerA)
    const playerBUnits = this.units.filter(u => u.getPlayer() !== playerA)

    return this._getOverlappingUnits(playerAUnits, playerBUnits)
  }

  _getOverlappingUnits(groupA, groupB) {
    const collisions = new Set()

    for (let aIndex = 0; aIndex < groupA.length; aIndex++) {
      for (let bIndex = 0; bIndex < groupB.length; bIndex++) {
        if (groupA[aIndex].collidesWith(groupB[bIndex])) {
          collisions.add(groupA[aIndex])
          collisions.add(groupB[bIndex])
        }
      }
    }

    return collisions
  }

}
