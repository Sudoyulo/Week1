const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];

const passCheck = grades.filter(function(percent) {
  if (percent > 70)
    return percent;
});

console.log("Subset of passing grades:", passCheck);

const failCheck = grades.filter(
  percent => {
    if (percent < 70)
      return percent;
  });

console.log("Subset of failed grades:", failCheck);
