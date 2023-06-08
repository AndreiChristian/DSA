// order key value pairs

// element access via key

// iterable

// keys are unique, values are not

// keys can be anything, including reference values

// pure data storage, optimized for data access

const resultData = new Map();

resultData.set("average", 1.53);
resultData.set("max", 3);

const germany = { name: "Germany", population: 100 };

resultData.set(germany, 3);

console.log(resultData);

console.log(resultData.get("max"));
