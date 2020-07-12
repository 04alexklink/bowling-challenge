'use strict';
describe('Frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it('has a _roll1 and _roll2 property, both set to null, and accessed through methods', function() {
    expect(frame.roll1Points()).toEqual(null);
    expect(frame.roll2Points()).toEqual(null);
  });
  describe('roll1',function() {
    it('can take a score as an argument and then set the score for roll1', function() {
      frame.roll1(4);
      expect(frame.roll1Points()).toEqual(4)
    });
    it('raises error if score inputted is not between 0 and 10 ', function() {
      expect(function(){ frame.roll1(-2); }).toThrowError('Score not possible. Please input score between 0 and 10');
    });
    it('raises error if score inputted is not between 0 and 10 ', function() {
      expect(function(){ frame.roll1(11); }).toThrowError('Score not possible. Please input score between 0 and 10');
    });
  });

  describe('roll2', function() {
    it('can take a score as an argument and then set the score for roll2', function() {
      frame.roll2(5);
      expect(frame.roll2Points()).toEqual(5)
      });
      it('raises error if score inputted is not between 0 and 10 ', function() {
        expect(function(){ frame.roll2(-2); }).toThrowError('Score not possible. Please input score between 0 and 10');
      });
      it('raises error if score inputted is not between 0 and 10 ', function() {
        expect(function(){ frame.roll2(11); }).toThrowError('Score not possible. Please input score between 0 and 10');
      });
  });

  it('can take a score as an argument and then set the score for roll2', function() {
    frame.roll2(5);
    expect(frame.roll2Points()).toEqual(5)
    });

  describe('frameScoreTotal', function() {
    it('adds up score from roll1 and roll2', function() {
      frame.roll1(5);
      frame.roll2(4);
      expect(frame.frameScoreTotal()).toEqual(9)
    });
  });
});