const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArrayEquals = function(alice,bob) {
  if (eqArrays(alice, bob)) {
    console.log("They are equal.");
  } else {
    console.log("They are not equal.");
  }
};

const flatten = function(lumpy) {
  let flat = [];
  let index = 0;

  while (index < lumpy.length) {
    if (typeof lumpy[index] === "number") {
      flat.push(lumpy[index]);
      index++;
    } else if (typeof lumpy[index] === "object") {
      if (lumpy[index].length === 1) {
        flat.push(lumpy[index][0]);
        index++;
      } else {
        flat.push(lumpy[index].shift());
      }
    }
  }
  return flat;
};

module.exports = flatten;

console.log(flatten([1, 2, [3, 4, 4.5], 5, [6]]));