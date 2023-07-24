const fibonacci = (n: number): number[] => {
  const array = [0, 1];

  while (array.length < n) {
    array.push(array[array.length - 1] + array[array.length - 2]);
  }

  return array;
};

console.log(...fibonacci(2));
console.log(...fibonacci(3));
console.log(...fibonacci(7));
