describe('Frame', function() {
  var frame;
  it('can come up with a score for roll1', function() {
  frame = new Frame();
  expect(frame.roll1()).toEqual(6)
  });
  it('can come up with a score for roll2', function() {
    frame = new Frame();
    expect(frame.roll2()).toEqual(6)
    });

});