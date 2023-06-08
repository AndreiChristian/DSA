type ReturnObj = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

function createCounter(init: number): ReturnObj {
  const initialValue = init;
  let currentValue = init;

  return {
    increment() {
      currentValue++;
      return currentValue;
    },
    decrement() {
      currentValue--;
      return currentValue;
    },
    reset() {
      currentValue = initialValue;
      return currentValue;
    },
  };
}
