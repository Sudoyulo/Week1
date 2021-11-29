const assertEqual = require('./assertEqual');

const tail = function(array) {
  let solution = array.slice(1);
  if (array.length < 1) {
    return [];
  } else {
    return solution;
  }
};

module.exports = tail;
