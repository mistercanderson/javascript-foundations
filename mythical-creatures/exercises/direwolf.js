// const Stark = require('../exercises/stark');

class Direwolf {
  constructor(name, home = 'Beyond the Wall', size = 'Massive') {
    this.name = name;
    this.home = home;
    this.size = size;
    this.starksToProtect = [];
    this.huntsWhiteWalkers = true;
  };

  protect(stark) {
    if (this.home === stark.location &&
        this.starksToProtect.length < 2) {
      this.starksToProtect.push(stark);
      stark.safe = true;
      this.huntsWhiteWalkers = false;
    };
  };

  leave(stark) {
    for (var i = 0; i < this.starksToProtect.length; i++) {
      if (this.starksToProtect[i].name === stark.name) {
        stark.safe = false;
        this.starksToProtect.splice(i, 1)
      };
    };
  };

}

module.exports = Direwolf
