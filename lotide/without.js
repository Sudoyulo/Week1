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

const without = function (bucket,yucky) {
  let yummy = [];
  for (let i = 0; i < bucket.length; i++) {
    if (!(yucky.includes(bucket[i]))) {
      yummy.push(bucket[i]);
    }
  }
  return yummy;
};

module.exports = without;

// without([1, 2, 3], [1]);
// without(["1", "2", "3"], [1, 2, "3"]);

assertArrayEquals(without([1, 2, 3], [1]), [2,3]); //t
assertArrayEquals(without([1, 2, 3], [1]), ["2",3]); //f
assertArrayEquals(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); //t


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArrayEquals(words, ["hello", "world", "lighthouse"]);