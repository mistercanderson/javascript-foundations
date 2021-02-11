const Direwolf = require('../exercises/direwolf');

class Stark {
  constructor(obj) {
    if (obj) {
    this.name = obj.name;
    this.location = obj.area || 'Winterfell';
    this.safe = false;
    };
  };
  sayHouseWords() {
    if (this.safe) {
      return 'The North Remembers'
    }
    return 'Winter is Coming'
  };
  callDirewolf(name, home) {
    var direwolf = new Direwolf(name, home);
    direwolf.home = this.location;
    direwolf.protect(this);
    return direwolf;
  };
}

module.exports = Stark
