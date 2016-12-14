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
    let initialLocations = this.units.map(unit => unit.getLocation())

    this.units.forEach(unit => {
      unit.advance()

      if (initialLocations.includes(unit.getLocation())) {
        unit.kill()
      }
    })
  }

  removeDeadUnits() {
    this.units = this.units.filter(unit => { return unit.isAlive() })
  }

}
