export default class CombatDetection {

  constructor(units) {
    this.units = units
  }

  getCombats() {
    if (this.units.length < 2) {
      return new Set()
    }

    const playerA = this.units[0].getPlayer()
    const playerAUnits = this.units.filter(u => u.getPlayer() === playerA)
    const otherPlayerUnits = this.units.filter(u => u.getPlayer() !== playerA)

    return this._getCollisionPairs(playerAUnits, otherPlayerUnits)
  }

  _getCollisionPairs(unitsA, unitsB) {
    let collisionPairs = []
    for (let aIndex = 0; aIndex < unitsA.length; aIndex++) {
      for (let bIndex = 0; bIndex < unitsB.length; bIndex++) {
        const unitFromA = unitsA[aIndex]
        const unitFromB = unitsB[bIndex]
        if (unitFromA.collidesWith(unitFromB)) {
          collisionPairs.push([unitFromA, unitFromB])
        }
      }
    }
    return collisionPairs
  }

}
