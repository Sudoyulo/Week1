const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: 😁 ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: 😕 ${actual} !== ${expected}`);
  }
};

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
      // console.log("names1,2", o1name, o2name);
      if (o1name === o2name) {
        // console.log("pair value", object1[o1name], object2[o2name]);
        if (typeof object1[o1name] === "object" && typeof object2[o2name] === "object") {
          // console.log("!!!Objects found");
          if (eqArrays(object1[o1name],object2[o2name])) {
            found = true;
          }
        } else if (object1[o1name] === object2[o2name]) {
          // console.log("pair key", o1name, o2name);
          // console.log("PASS!");
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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba),true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc),false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false