const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: 😁 ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: 😕 ${actual} !== ${expected}`);
  }
};

const countLetters = function(countThisString) {
  let letterCount = {};

  for (let letter of countThisString) {
    if (letterCount[letter]) { //already exists
      letterCount[letter] += 1; //increase
    } else {
      letterCount[letter] = 1; //make
    }
  }
  console.log(letterCount);
  return letterCount;
};
module.exports = countLetters;

countLetters('Lighthouse Labs');