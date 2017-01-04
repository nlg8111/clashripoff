import Unit from "../src/gameLogic/Unit"
import Player from "../src/gameLogic/Player"
import MovementPattern from "../src/gameLogic/MovementPattern"
import CombatDetection from "../src/gameLogic/CombatDetection"

describe("Movement Pattern", () => {

  it ("can be created", () => {
    const pattern = new MovementPattern(0.0, 1.0)
    expect(pattern instanceof MovementPattern)
  })

  it ("steps forward in 0.01 increments", () => {
    const pattern = new MovementPattern(0.0, 1.0)
    pattern.step()
    expect(pattern.getCurrentLocation() === 0.01)
  })

  it ("steps backward in 0.01 increments", () => {
    const pattern = new MovementPattern(1.0, 0.0)
    pattern.step()
    expect(pattern.getCurrentLocation() === 0.99)
  })

})

describe("Unit", () => {

  beforeEach(() => {
    this.player = new Player("red", 0.0)
    this.pattern = new MovementPattern(0.0, 1.0)
  })

  it ("can be created", () => {
    const unit = new Unit(this.player, this.pattern)
    expect(unit instanceof Unit)
  })

  it ("has location based on movement pattern", () => {
    const unit = new Unit(this.player, this.pattern)
    this.pattern.step()
    expect(unit.getLocation() === this.pattern.getCurrentLocation())
  })

})

describe("Combat Detection", () => {

  beforeAll(() => {
    this.playerA = new Player("#000000", 0.0)
    this.playerB = new Player("#FFFFFF", 1.0)
    this.position00 = new MovementPattern(0.00, 0.00)
    this.position01 = new MovementPattern(0.01, 0.01)
    this.position02 = new MovementPattern(0.02, 0.02)
    this.position03 = new MovementPattern(0.03, 0.03)
  })

  it ("detects no combat if there are no units", () => {
    const detector = new CombatDetection([])
    expect (detector.getCombats().length === 0)
  })

  it ("detects no combat if there is only one unit", () => {
    const units = [
      new Unit(this.playerA, this.position00)
    ]
    const detector = new CombatDetection(units)
    expect (detector.getCombats().length === 0)
  })

  it ("detects no combat if there are only one player's units", () => {
    const units = [
      new Unit(this.playerA, this.position00),
      new Unit(this.playerA, this.position01)
    ]
    const detector = new CombatDetection(units)
    expect (detector.getCombats().length === 0)
  })

  it ("detects no combat if hostile units are far from each other", () => {
    const units = [
      new Unit(this.playerA, this.position00),
      new Unit(this.playerB, this.position03)
    ]
    const detector = new CombatDetection(units)
    expect (detector.getCombats().length === 0)
  })

  it ("detects combat if two hostile units are adjacent", () => {
    const units = [
      new Unit(this.playerA, this.position01),
      new Unit(this.playerB, this.position02)
    ]
    const detector = new CombatDetection(units)
    expect (detector.getCombats().length === 1)
  })

  it ("detects multiple combats from multiple adjacent hostile pairs", () => {
    const units = [
      new Unit(this.playerA, this.position00),
      new Unit(this.playerB, this.position01),
      new Unit(this.playerB, this.position02),
      new Unit(this.playerA, this.position03)
    ]
    const detector = new CombatDetection(units)
    expect (detector.getCombats().length === 2)
  })

})
