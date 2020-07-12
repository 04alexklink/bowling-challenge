'use strict';
describe('ScoreCard', function() {
var scorecard
it('has an empty score array', function() {
  scorecard = new ScoreCard();
  expect(scorecard.game).toEqual([])
});
});