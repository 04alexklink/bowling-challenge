'use strict';
describe('ScoreCard', function() {
  var scorecard;
  var frame1;
  var frame2;

  beforeEach(function() {
    scorecard = new ScoreCard();
  });

  it('has an empty score array accessed by a method', function() {
    expect(scorecard.gameScore()).toEqual([])
  });
  it('puts frame objects into the scorecard array', function() {
    frame1 = jasmine.createSpyObj('frame',['roll1Points', 'roll2Points']);
    frame2 = jasmine.createSpyObj('frame',['roll1Points', 'roll2Points']);
    scorecard.addFrame(frame1);
    scorecard.addFrame(frame2);
    console.log(scorecard.gameScore())
    expect(scorecard.gameScore().length).toEqual(2)
  });
  it('only accepts 10 frames/a full game', function() {
    for (var i = 0; i<10; i++) {
      scorecard.addFrame(frame1)};
      expect(function(){ scorecard.addFrame(frame1); }).toThrowError('This game is now over')
  });
});