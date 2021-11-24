const original = process.argv[2];

const obfuscate = function(password) {

  let obfu = "";

  for (let letter of password) {
    switch (letter) {
    case "a":
      obfu += "4";
      break;
    
    case "e":
      obfu += "3";
      break;

    case "i":
      obfu += "1";
      break;

    case "o":
      obfu += "0";
      break;
  
    default:
      obfu += letter;
    }
  }
  return obfu;
};

console.log(obfuscate(original));

// Every "a" in the string should be replaced with a "4".
// Every "e" in the string should be replaced with a "3".
// Every "o" (oh) in the string should be replaced with a "0" (zero).
// Every "l" (el) in the string should be replaced with a "1" (one).