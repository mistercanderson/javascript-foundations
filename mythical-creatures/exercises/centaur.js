class Centaur {
  constructor(obj) {
    this.name = obj.name;
    this.breed = obj.type;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.activitiesCompleted = 0;
  };

  shootBow() {
    if (!this.cranky) {
      this.activitiesCompleted++;
    };
    if (this.activitiesCompleted > 2) {
      this.cranky = true;
    };
    if (this.cranky ||
      this.layingDown) {
      return 'NO!'
    };
    return 'Twang!!!'
  };

  run() {
    if (!this.cranky) {
      this.activitiesCompleted++;
    };
    if (this.activitiesCompleted > 2) {
      this.cranky = true;
    };
    if (this.cranky ||
      this.layingDown) {
      return 'NO!'
    };
    return 'Clop clop clop clop!!!'
  };

  sleep() {
    if (this.standing) {
      return 'NO!'
    };
    this.activitiesCompleted = 0;
    this.cranky = false;
    return 'ZZZZ'
  };

  layDown() {
    this.standing = false;
    this.layingDown = true;
  };

  standUp() {
    this.standing = !false;
    this.layingDown = !true;
  };

  drinkPotion() {
    if (this.layingDown) {
      return 'Not while I\'m laying down!'
    } else {
      this.cranky = false
    }
  };
};

module.exports = Centaur
