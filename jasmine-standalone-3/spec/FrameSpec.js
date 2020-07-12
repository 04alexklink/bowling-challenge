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

  it('can take and then set a score for roll1', function() {
    frame.roll1(4);
    expect(frame.roll1Points()).toEqual(4)
  });
  it('can take and and then set a score for roll2', function() {
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