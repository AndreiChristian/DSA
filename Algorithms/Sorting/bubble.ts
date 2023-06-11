import { createRandomArray } from "./utils.ts";

const random1 = createRandomArray(10);

const bubbleSort = (nums: number[]): void => {
  console.log("Initial", ...nums);
  let itCount = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 0; j < nums.length - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
      itCount++;
      console.log(`Iteration ${itCount}: `, ...nums);
    }
  }
  console.log("Final", ...nums);
};

bubbleSort(random1);
