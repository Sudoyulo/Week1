const assertEqual = require('./assertEqual');

const head = function(array) {
  if (Array.isArray(array)) {
    if (array.length > 0) {
      return array[0];
    }
  } else {
    return undefined;
  }
};

// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

module.exports = head;