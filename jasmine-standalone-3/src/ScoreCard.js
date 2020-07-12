'use strict';
class ScoreCard {
  constructor() {
  this.game = []
  };

  gameScore() {
    return this.game
  };

  addFrame(frame) {
    if((this.gameScore().length) >=10) {
      throw new Error('This game is now over');
    }
    this.game.push(frame);
  };

};

