'use strict';
class Frame {
  constructor() {
    this.frameScore = {}
    this._roll1 = null
    this._roll2 = null
    this._MINROLLSCORE = 0
    this._MAXROLLSCORE = 10
  };

  roll1(number) {
    if(number < this._MINROLLSCORE || number > this._MAXROLLSCORE) {
      throw new Error('Score not possible. Please input score between 0 and 10')
    };
    this._roll1 = number
  };
  roll2(number) {
    if(number < this._MINROLLSCORE || number > this._MAXROLLSCORE) {
      throw new Error('Score not possible. Please input score between 0 and 10')
    };
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