const assertEqual = require('./assertEqual');


// const eqArrays = function(array1, array2) {
//   if (array1.length !== array2.length) {
//     return false;
//   }
//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i]) {
//       return false;
//     }
//   }
//   return true;
// };


const eqArrays = function(array1, array2) {

  const recursion = (value, object) => {

    if (object === undefined || typeof object === "string" ) {
      return false;
    } else if (value.length === object.length) {
    
      for (let i = 0; i < object.length; i++) {
        if (value[i] !== object[i]) {
          recursion(value, object[0]);
        }
      }
      return true;
      
    } else if (value !== object) {
      recursion(value, object[0]);
    }
  
    if (object[1] !== undefined) {
      if (object !== undefined) {
        if (value.length === object[1].length) {
          for (let i = 0; i < object.length; i++) {
            if (value[i] !== object[i]) {
              recursion(value, object[0]);
            }
          }
          return true;
        }
      }
    }
  };

  let found = 0;

  for (let value of array1) {
    if (recursion(value,array2)) {
      found++;
    }
  }

  if (found === array1.length) return true;
  else return false;

};
module.exports = eqArrays;

const recursion = (value, object) => {

  if (object === undefined || typeof object === "string" ) {
    return false;
  } else if (value.length === object.length) {
  
    for (let i = 0; i < object.length; i++) {
      if (value[i] !== object[i]) {
        recursion(value, object[0]);
      }
    }
    return true;
    
  } else if (value !== object) {
    recursion(value, object[0]);
  }

  if (object[1] !== undefined) {
    if (object !== undefined) {
      if (value.length === object[1].length) {
        for (let i = 0; i < object.length; i++) {
          if (value[i] !== object[i]) {
            recursion(value, object[0]);
          }
        }
        return true;
      }
    }
  }
};

module.exports = recursion;

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);

// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);