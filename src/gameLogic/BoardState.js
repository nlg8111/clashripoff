

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
    this.units.forEach(unit => unit.advance())
  }

}
