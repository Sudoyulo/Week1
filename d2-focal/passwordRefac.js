const obfuscate = function(password) {
  let obfuPassword = "";

  for (let letter of password) {
    switch (letter) {
    case "a":
      obfuPassword += "4";
      break;
    
    case "e":
      obfuPassword += "3";
      break;

    case "i":
      obfuPassword += "1";
      break;

    case "o":
      obfuPassword += "0";
      break;
  
    default:
      obfuPassword += letter;
    }
  }
  return obfuPassword;
};

const userInput = process.argv[2];
console.log(obfuscate(userInput));