const { chunkArray } = require('./index');

// INTENTIONAL SYNTAX ERROR for GUIDE-2677 validation failure testing
// This will cause Jest to fail to parse the file
const broken = {];

describe('chunkArray', () => {
  it('should chunk array', () => {
    expect(chunkArray([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
  });
});
