import CombatDetection from './CombatDetection'

export default class BoardState {
  constructor () {
    this.units = []
  }

  addUnit (unit) {
    this.units.push(unit)
  }

  getUnits () {
    return this.units
  }

  advanceUnits () {
    this.units.forEach((u) => u.advance())
  }

  killCombattingUnits () {
    const combatDetection = new CombatDetection(this.units)
    combatDetection.getCombats().forEach(participants => {
      participants.forEach(unit => unit.kill())
    })
  }

  removeDeadUnits () {
    this.units = this.units.filter(unit => {
      return unit.isAlive()
    })
  }
}
