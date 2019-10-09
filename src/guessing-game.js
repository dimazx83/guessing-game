class GuessingGame {
  constructor() {
    this.m = [];
  }

  setRange(min, max) {
    for (let i = min; i < max + 1; i++) {
      this.m[i] = i;
    }
  }

  guess() {
    return this.m[0] + Math.round((this.m[this.m.length - 1] - this.m[0]) / 2);
  }

  lower() {
    this.m = this.m.slice(0, this.m.indexOf(this.guess()));
  }

  greater() {
    this.m = this.m.slice(this.m.indexOf(this.guess() + 1));
  }
}

module.exports = GuessingGame;
