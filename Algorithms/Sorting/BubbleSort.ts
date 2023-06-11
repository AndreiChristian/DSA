import { createRandomArray } from "./utils.ts";

const random1 = createRandomArray(10);

const bubbleSort = (nums: number[]): void => {
  console.log("Initial", ...nums);
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
      console.log(...nums);
    }
  }
  console.log("Final", ...nums);
};

bubbleSort(random1);
