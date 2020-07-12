'use strict';
class Frame {
  constructor() {
    this.frameScore = {}
    this._roll1 = null
    this._roll2 = null
  };

  roll1(number) {
    this._roll1 = number
  };
  roll2(number) {
    this._roll2 = number
  };
  roll1Points() {
    return this._roll1
  }
  roll2Points() {
    return this._roll2
  }
  frameScoreTotal() {
    return this._roll1 + this._roll2
  }

};