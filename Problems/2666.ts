type Fn = (...args: any[]) => any;

function once(fn: Fn): Fn {
  let isCalled: boolean = false;

  return function (...args) {
    if (!isCalled) {
      isCalled = true;
      return fn(...args);
    } else {
      return undefined;
    }
  };
}

let fn = (a, b, c) => a + b + c;
let onceFn = once(fn);

console.log(fn(1, 2, 3));
console.log(onceFn(1, 2, 3));
console.log(onceFn(2, 3, 6));
