import { createRandomArray } from "./utils.ts";

const random1 = createRandomArray(50);

const selectionSort = (nums: number[]): void => {
  console.log(...nums);
  console.log("--------------------");
  for (let i = 0; i <= nums.length; i++) {
    let min = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[min]) {
        min = j;
      }
    }
    if (min !== i) {
      [nums[i], nums[min]] = [nums[min], nums[i]];
    }
    console.log(...nums);
  }
};

selectionSort(random1);
