const round = function(number) {

  
  console.log (Math.round(0.2 * 100) / 100) ;
};

round(100)
const median = function(arr) {
  arr.sort();
  let half = arr.length / 2;
  console.log(half);
  return arr[arr.length / 2];
};

console.log(median([6,2,3,4,9,6,1,0,5]));