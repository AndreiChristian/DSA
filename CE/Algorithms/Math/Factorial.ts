const factorial = (n: number): number => {
  if (n <= 1) {
    return 1;
  } else {
    return n * (n - 1);
  }
};

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(5));
