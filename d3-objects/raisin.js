//pair progamming Yan Sun

const raisinAlarm = function(cookie) {
  for (let ingredient of cookie) {
    if (ingredient === "🍇") {
      return "Raisin Alert!";
    }
  }
  return "All good!";
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));

const raisinAlarmArray = function(cookie) {
  let res = [];
  let found = false;
  for (let ingredient of cookie) {
    found = false;
    for (let j = 0; j < ingredient.length; j++) {
      if (ingredient[j] === "🍇") {
        //res.push(“Raisin Alert!“)
        found = true;
      }
    }
    if (!found) {
      res.push("All good!");
    } else {
      res.push("Raisin Alert!");
    }
  }
  return res;
};
console.log(raisinAlarmArray(
  [
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"]
  ]
));
