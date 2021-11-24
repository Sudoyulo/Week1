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

assertArrayEquals([1,2,3],[1,2,3]);