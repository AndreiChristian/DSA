// * Objects

// unordered key value pairs

// element access via key

// not interable

// keys are unique, values are unique

// keys have to be strings, numbers or symbols

// can store data & functions

const person = {
  name: "Andrei",
  age: 23,
  hobbies: ["sports", "coding"],
  greet() {
    console.log("Hello");
  },
};

for (const key in person) {
  console.log(key);
}

const keys = Object.keys(person);
console.log(keys);

const values = Object.values(person);
console.log(values);
