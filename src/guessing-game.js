class GuessingGame {
  constructor() {
    this.m = [];
    this.min = 0;
    this.max = 0;
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    return this.min + Math.round((this.max - this.min) / 2);
  }

  lower() {
    this.max = this.guess();
  }

  greater() {
    this.min = this.guess();
  }
}

module.exports = GuessingGame;
