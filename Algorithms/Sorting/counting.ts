import { createRandomArray } from "./utils.ts";

const random = createRandomArray(1000);

const countingSort = (nums: number[]): void => {
  const min = Math.min(...nums);
  const max = Math.max(...nums);
  const range = max - min + 1;

  const countArray = new Array(range).fill(0);
  const sortedArray = new Array(nums.length);

  // Step 1: Count the occurrences of each element
  for (let i = 0; i < nums.length; i++) {
    const index = nums[i] - min;
    countArray[index]++;
  }

  for (let i = 1; i < range; i++) {
    countArray[i] = countArray[i] + countArray[i - 1];
  }

  for(let i = nums.length -1; i>=0;i --){
    const value = nums[i];
    const index = value - min;
    
  }

};

countingSort(random);
