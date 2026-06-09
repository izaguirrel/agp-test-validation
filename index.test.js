const { chunkArray } = require('./index');

describe('chunkArray', () => {
  it('should chunk array', () => {
    expect(chunkArray([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
  });

  it('should fail intentionally to test AGP validation', () => {
    // This test will always fail
    expect(true).toBe(false);
  });
});
