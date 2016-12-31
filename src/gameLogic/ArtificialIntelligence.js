export default class ArtificialIntelligence {

  constructor(spawnUnitCallback) {
    this.spawnUnitCallback = spawnUnitCallback
  }

  tick() {
    if (Math.random() < 0.01) {
      this.spawnUnitCallback()
    }
  }

}
