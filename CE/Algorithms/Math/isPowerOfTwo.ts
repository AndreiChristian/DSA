function isPowerOfTwo(n: number): boolean {
  let x = n;

  while (x > 1) {
    if (x % 2 === 1) {
      return false;
    } else {
      x = x / 2;
    }
  }

  return true;
}

console.log(isPowerOfTwo(1))
console.log(isPowerOfTwo(2))
console.log(isPowerOfTwo(5))