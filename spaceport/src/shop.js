// var Ship = require('../src/ship');
var Part = require('../src/part');
class Shop {
  constructor(obj) {
    this.name = obj.name;
    this.inventory = {}
  }
  addInventory(part) {
    if (part instanceof Part) {
      this.inventory[part.type] = part;
    }
  }
  outfitShip(ship, partType) {
    if (!ship.captain) {
      return `cannot outfit a ship without a captain`
    } else if (ship.captain.credits < this.inventory[partType].value) {
      return `you require ${this.inventory[partType].value - ship.captain.credits} more credits to make this purchase`
    } else {
      ship.captain.credits -= this.inventory[partType].value;
      ship.updatePart(this.inventory[partType]);
      delete this.inventory[partType]
      return `${partType} added to ship`
    }
  }
}
module.exports = Shop
