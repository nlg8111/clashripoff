export default class ArtificialIntelligence {

  constructor(spawnUnitCallback) {
    this.spawnUnitCallback = spawnUnitCallback
  }

  tick() {
    if (Math.random() < 0.005) {
      this.spawnUnitCallback()
    }
  }

}
