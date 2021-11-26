const printItems = function(array) {
  for (let item of array) {
    if (Array.isArray(item)) {
      printItems(item);
    } else {
      console.log(item);
    }
  }
}

let array = ["😎", "💩", "🤗", "😼", "😂"];
printItems(array);
console.log("---");
array = ["😎", ["💩", "🤗"], "😼", "😂"];
printItems(array);
console.log("---");
array = ["😎", [["💩", ["🤗"]], [[["😼"]], "😂"]]];
printItems(array);