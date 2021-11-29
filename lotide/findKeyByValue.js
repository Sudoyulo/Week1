const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: 😁 ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: 😕 ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(tvList, name) {
  for (let program in tvList) {
    if ((tvList[program]) === name) {
      return program;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;

const bestTVShowsByGenre = {
  sciFi: "The Expanse", //sci_fi
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);