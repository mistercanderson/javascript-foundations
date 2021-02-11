//issue with direwolf-test.js line 48, cannot read property of undefined
//changed test line 49:29 to include {} inside params
const Direwolf = require('../exercises/direwolf');

class Stark {
  constructor({name = 'Empty', area = 'Winterfell'}) {
    this.name = name;
    this.location = area;
    this.safe = false;
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
