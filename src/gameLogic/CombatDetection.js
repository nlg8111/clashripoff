import _ from 'lodash'

export default class CombatDetection {
  constructor (units) {
    this.units = units
  }

  getCombats () {
    const getUnitColor = unit => unit.getPlayer().getColor()
    const unitsByColor = Object.values(_.groupBy(this.units, getUnitColor))
    if (unitsByColor.length < 2) {
      return []
    }
    return this._getCollisionPairs(unitsByColor[0], unitsByColor[1])
  }

  _getCollisionPairs (unitsA, unitsB) {
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
