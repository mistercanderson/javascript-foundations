class SkatePark {
  constructor(obj) {
    this.name = obj.name;
    this.yearFounded = obj.year;
    this.style = obj.type;
    this.features = obj.features;
    this.isPrivate = obj.isPrivate || false;
    this.cost = obj.price || 0;
    this.occupants = [];
  }
  admit(skater) {
    if (this.isPrivate &&
      this.cost <= skater.money &&
      this.occupants.length < 3) {
      skater.money -= this.cost;
      this.occupants.push(skater);
      return `Welcome to ${this.name}, the cost will be $${this.cost}.00.`
    } else if (!this.isPrivate &&
      this.occupants.length < 3) {
      this.occupants.push(skater);
      return `Welcome to the free ${this.name} Skatepark!`
    } else if (this.cost > skater.money){
      return `Sorry, you don't have enough money.`
    } else if (this.occupants.length > 2) {
      return `Sorry, we are at max capacity. Thank you for understanding.`
    }
  }
}
module.exports = SkatePark
