const wrapLog = function (callback, name) {
  //Create a function called wrapLog() that 
  // [x]takes in a function (callback) and a string (name) 
  // [x]and returns a function that 
  // [x]internally invokes (calls) callback during its execution and 
  //    [x]also logs the name, 
  //    []input parameters, 
  //    [x]and return value of the callback function. 

  return function() {
    console.log(name + " (" + Array.from(arguments) + ") => " + callback(...arguments));
  };
};

const area = function(x, y) {
  return x * y;
};
const logArea = wrapLog(area, "area");

logArea(5, 3); // area(5, 3) => 15
logArea(3, 2); // area(3, 2) => 6

const volume = function (x, y, z) {
  return x * y * z;
};
const logVolume = wrapLog(volume, "volume");

logVolume(5, 3, 2); // volume(5, 3, 2) => 30
logVolume(3, 2, 4); // volume(3, 2, 4) => 24