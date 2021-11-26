const findWaldo = function(names, found) {
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    if (name === "Bob") {
      found(i);   // execute callback
    }
  }
};

const actionWhenFound = function(index) {
  console.log(`Found him at ${index}!`);
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(index) {
  console.log("Bob is located at:", index);
});