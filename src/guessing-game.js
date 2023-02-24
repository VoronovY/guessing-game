class GuessingGame {
  constructor() {}

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    const mid = Math.ceil((this.min + this.max) / 2);
    this.mid = mid;
    return mid;
  }

  lower() {
    this.max = this.mid;
  }

  greater() {
    this.min = this.mid;
  }
}

module.exports = GuessingGame;
