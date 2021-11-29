const assertEqual = function (actual, expected) {
  if (actual === expected)
    console.log(`Assertion Passed: 😁 ${actual} === ${expected}`);
  else
    console.log(`Assertion Failed: 😕 ${actual} !== ${expected}`);

};

const eqArrays = function (array1, array2) {
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

const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length)
    return false;

  for (let o1name in object1) {
    for (let o2name in object2) {
      if (o1name === o2name && (
        (typeof object1[o1name] === "object" && typeof object2[o2name] === "object") ||
        (typeof object1[o1name] === "string" && typeof object2[o2name] === "string"))
      ) {
        if (!eqArrays(object1[o1name], object2[o2name])) {
          return false;
        }
      }
    }
  }
  return true;
};

module.exports = eqObjects;

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false