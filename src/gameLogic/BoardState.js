import Unit from "./Unit"

export default class BoardState {

  constructor() {
    this.units = []
  }

  addUnit() {
    this.units.push(new Unit())
  }

  advanceUnits() {
    this.units.forEach(unit => unit.advance())
  }

}
