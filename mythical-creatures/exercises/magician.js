class Magician {
  constructor(obj = {name, assistant, clothing}) {
    this.name = `The Great ${obj.name}`;
    this.assistant = obj.assistant;
    this.favoriteAccessory = obj.clothing || 'top hat';
    this.confidencePercentage = 10;
  };
  performIncantation(incantation) {
    return `${incantation.toUpperCase()}!`;
  };
  performTrick() {
    if (this.favoriteAccessory === 'top hat') {
      this.confidencePercentage += 10;
      return 'PULL RABBIT FROM TOP HAT'
    } else {
      this.confidencePercentage += 10;
      return 'PULL DOVE FROM SLEEVE';
    };
  };
  performShowStopper() {
    if (this.confidencePercentage < 100 || !this.assistant) {
      return 'Oh no, this trick is not ready!';
    } else {
      return 'WOW! The magician totally just sawed that person in half!';
    };
  };
};

module.exports = Magician
