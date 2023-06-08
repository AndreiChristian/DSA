function createCounter(n: number): () => number {
  // store the number of calls

  let calls = -1;

  return function () {
    calls++;
    return n + calls;
  };
}

const counter = createCounter(10);
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
