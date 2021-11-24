const joinList = function(receivedList) {
  let glueString = "";

  for (let i = 0; i < receivedList.length; i++) {
    glueString += receivedList[i] + ", ";
  }
  
  return glueString.slice(0,glueString.length - 2);
};

const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
const concepts = joinList(conceptList);
console.log(`Today I learned about ${concepts}.`);