class LunchBox {
  constructor(obj) {
    this.owner = obj.owner;
    this.material = obj.madeOf;
    this.shape = obj.shape;
    this.color = obj.color;
    this.snacks = []
  }
  acquireSnack(snack) {
    this.snacks.push(snack);
    snack.isInLunchBox = true;
  }
  findHealthySnacks() {
    var healthySnacks = [];
    for (var i = 0; i < this.snacks.length; i++) {
      if (this.snacks[i].checkForHealthy()) {
        healthySnacks.push(this.snacks[i].type);
      }
    }
    return healthySnacks
  }
}

module.exports = LunchBox;
