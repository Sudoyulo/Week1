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

assertArrayEquals(middle([]),[]);
assertArrayEquals(middle([1]),[]);
assertArrayEquals(middle([1, 2, 3]),[2]);
assertArrayEquals(middle([1, 2, 3, 4, 5, 6]),[4,5]);

