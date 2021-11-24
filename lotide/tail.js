const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: 😁 ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: 😕 ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  let solution = [];
  if (array.length < 1) {
    return [];
  } else {
    for (let i = 1; i < array.length; i++) {
      solution.push(array[i]);
    }
    //console.log(solution);
    return solution;
  }
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// const words1 = ["Yo Yo"];
// tail(words1);
// assertEqual(words1.length, 1);

// const words0 = [];
// tail(words0);
// assertEqual(words0.length, 0);
