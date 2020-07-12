'use strict';
class Frame {
  constructor() {
    this.frameScore = {};
    this._roll1 = null;
    this._roll2 = null;
    this._MINROLLSCORE = 0;
    this._MAXROLLSCORE = 10;
  };

  roll1(number) {
    if(this._isINCORRECTROLL1SCORE(number)) {
      throw new Error('Score not possible. Please input score between 0 and 10')
    };
    this._roll1 = number;
  };

  _isINCORRECTROLL1SCORE(number) {
    return (number < this._MINROLLSCORE || number > this._MAXROLLSCORE)
  };
  roll2(number) {
    if(this._isINCORRECTROLL2SCORE(number)) {
      throw new Error(`Score not possible. Please input score between 0 and ${10 - this.roll1Points()}`)
    };
    this._roll2 = number;
  };

  _isINCORRECTROLL2SCORE(number) {
    return (number < this._MINROLLSCORE) || ((this.roll1Points() + number) > this._MAXROLLSCORE)
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