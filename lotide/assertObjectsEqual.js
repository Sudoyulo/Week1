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

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  let found = false; //flag
  for (let o1name in object1) {
    found = false;
    for (let o2name in object2) {
      if (o1name === o2name) {
        if (typeof object1[o1name] === "object" && typeof object2[o2name] === "object") {
          if (eqArrays(object1[o1name],object2[o2name])) {
            found = true;
          }
        } else if (object1[o1name] === object2[o2name]) {
          found = true;
        }
      }
    }
    if (found === false) {
      return false;
    }
  }
  return true;
};


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const obj1 = {
  name: "Kevin",
  location: "Canada"
};

const obj2 = {
  name: "Devin",
  location: "Canada"
};

const obj3 = {
  location: "Canada",
  name: "Kevin"
};

assertObjectsEqual(obj1,obj1);
assertObjectsEqual(obj1,obj2);
assertObjectsEqual(obj1,obj3);