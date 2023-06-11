export const createRandomArray = (length:number): number[] => {
  const array: number[] = [];

  for (let i = 0; i < length; i++) {
    array.push(Math.ceil(Math.random() * 100));
  }

  return array;
};
