var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  };
  gazeAtVictim(victim) {
    if (this.statues.length > 2) {
      this.statues.push(new Statue(victim.name));
      var person = new Person(this.statues[0].name);
      person.mood = 'relieved'
      this.statues.shift();
      return person
    };
    this.statues.push(new Statue(victim.name));
  };

};
module.exports = Medusa
