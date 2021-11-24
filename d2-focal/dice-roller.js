//node dice-roller.js 3

const input = String(process.argv.slice(2));

const roll = function() {
  return Math.floor(Math.random() * 6) + 1;
};

let solution = [];
for (let i = 0; i < input; i++) {
  solution.push(roll());
}

//console.log("Rolled " + Number(input) + " dice : " + solution.join(" "));
console.log(`Rolled ${Number(input)} dice : ${solution.join(" ")}`);