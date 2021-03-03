class Ship {
  constructor(obj) {
    this.name = obj.name;
    this.type = obj.type;
    this.maxCrew = obj.maxCrew;
    this.odometer = obj.odometer || 0;
    this.fuelCapacity = obj.fuelCapacity || 10;
    this.fuel = 0;
    this.captain = obj.captain || null;
    this.crew = [];
    this.cargo = [];
    this.parts = obj.parts || {};
  }
  addCrew(crew) {
    for (var i = 0; i < crew.length; i++) {
      if (this.crew.length < this.maxCrew &&
        crew[i].constructor.name === 'Being') {
        this.crew.push(crew[i])
      }
    }
  }
  loadCargo(part) {
    if (part.constructor.name === 'Part') {
      this.cargo.push(part)
    }
  }
  updatePart(part) {
    if (this.parts[part.type]) {
      var oldValue = this.parts[part.type].value;
    }
    this.parts[part.type] = part;
    return oldValue - part.value
  }
  checkReadiness() {
    if (!this.captain) {
      this.readyToFly = false;
      return `Cannot fly without a captain`
    } else if (!this.fuel) {
      this.readyToFly = false;
      return `Cannot fly without fuel`
    } else if (!Object.keys(this.parts).length) {
      this.readyToFly = false;
      return `Cannot fly without parts`
    } else {
      this.readyToFly = true;
      return `Good to go!`
    }
  }
}
module.exports = Ship
