const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');
const recursion = require('./eqArrays');

const middle = function(malchom) {
  let middleIndex = Math.floor(malchom.length / 2);

  if (malchom.length < 3) {
    return [];
  } else if (malchom.length % 2 === 1) { // odd
    return [malchom[middleIndex]];
  } else {
    return [malchom[middleIndex], malchom[middleIndex + 1]];
  }
};

module.exports = middle;

// assertArraysEqual(middle([]),[]);
// assertArraysEqual(middle([1]),[]);
// assertArraysEqual(middle([1, 2, 3]),[2]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[4,5]);

