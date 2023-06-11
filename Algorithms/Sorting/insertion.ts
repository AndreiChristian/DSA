import { createRandomArray } from "./utils.ts";

const random1 = createRandomArray(10);

export const insertionSort = (arr: number[]) => {
  console.log(...arr);
  console.log("---");
  for (let i = 1; i < arr.length; i++) {
    const current: number = arr[i];

    let j = i - 1;

    while (j > -1 && current < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;

    console.log(...arr);
  }
  console.log("---");
  console.log(...arr);
};

insertionSort(random1);
