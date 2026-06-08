const _ = require('lodash');

function chunkArray(arr, size) {
  return _.chunk(arr, size);
}

module.exports = { chunkArray };
