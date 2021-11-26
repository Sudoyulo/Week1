const findWaldo = function(names, found) {
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    if (name === "Waldo") {
      found(i);   // execute callback
    }
  }
};

const actionWhenFound = function(index) {
  console.log(`Found him at ${index}!`);
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

const findWaldoFor = function(names, found) {
  names.forEach(names => {
    if (names === "Waldo") {
      found();   // execute callback
    }
  }
  );
};

const actionWhenFoundFor = function(index) {
  console.log(`Found him!`);
};

findWaldoFor(["Alice", "Bob", "Waldo", "Winston"], actionWhenFoundFor);