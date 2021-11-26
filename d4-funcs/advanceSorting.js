const sorting = function(list) {
  
  let sorted = list.sort(compareName);

  return sorted;
};

const compareName = function(a,b) {
  if (a.name === b.name)
    return b.age - a.age;
  else if (b.name > a.name)
    return -1;
  else
    return 1;
};


const students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "bruce",    age: 99 },
  { id: 5, name: "alex",     age: 30 }
];

console.log(sorting(students));
