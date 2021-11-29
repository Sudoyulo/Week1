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

const takeUntil = function(array, callback) {
  let stored = [];

  for (let word of array) {
    if (!callback(word))
      stored.push(word);
    else
      break;
  }
  return stored;
};

module.exports = takeUntil;

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


const test1 = ["1","2","3",4,"5","6"];
const t1results = takeUntil(test1, x => typeof x === "number");
console.log(t1results);

assertArrayEquals(t1results, [ '1', '2', '3']); //pass
assertArrayEquals(t1results, [ '1', '2', '3', '4']); //fail