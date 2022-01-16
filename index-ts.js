// Core Typed
// -number
// -string
// -boolean
// -object
var person = {
  name: "John",
  age: 36,
  hobbies: ["walk", "run", "futbol"],
};
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
  var hobbie = _a[_i];
  console.log(hobbie.toUpperCase());
}

let arr = [1, 2, 3, 4, 5, 6];

let personNew = {
  name: "Ale",
  age: 28,
  country: "Spain",
};

for (let i = 0; i <= arr.length; i++) {
  try {
    console.log(arr[i]);
  } catch (e) {
    console.log(e);
  }
}

console.log('New Changes')
