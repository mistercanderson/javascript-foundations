class Fairy {
  constructor(name, dust = 10, clothes = {dresses: ['Iris']},
    disposition = 'Good natured') {
    this.name = name;
    this.dust = dust;
    this.clothes = clothes;
    this.disposition = disposition;
    this.humanWards = [];
  };
  receiveBelief() {
    this.dust++;
  };
  believe() {
    this.dust += 10;
  };
  makeDresses(arr) {
    for (var i = 0; i < arr.length; i++) {
      this.clothes.dresses.push(arr[i]);
    };
  };
  becomeProvoked() {
    this.disposition = 'Vengeful';
  };
  replaceInfant(obj) {
    if (this.disposition === 'Vengeful' ||
        this.humanWards.length < 3) {
      this.humanWards.push(obj)
      obj.disposition = 'Malicious'
    };
    this.disposition = 'Good natured'
    return obj
  };
};

module.exports = Fairy;
