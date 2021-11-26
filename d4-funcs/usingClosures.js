// const makeLoadedDie = function() {
//   const list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
//   /* your code here */
//   let roll = -1;
//   return function() {
//     roll ++;
//     return list[roll];
//   };
// };

// const rollLoadedDie = makeLoadedDie();

// console.log(rollLoadedDie());  // 5
// console.log(rollLoadedDie());  // 4
// console.log(rollLoadedDie());  // 6

const countdownGenerator = function (x) {
  
  const blast = "Blast Off!";
  const byebye = "Rockets already gone, bub!";
  const thingsToSay = [blast,byebye];

  return function() {
    x--;
    if (x > -1) {
      console.log("T-minus",x + 1 + "...");
    } else if (x === -1) {
      console.log(thingsToSay[0]);
    } else
      console.log(thingsToSay[1]);
  };
};

const countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!