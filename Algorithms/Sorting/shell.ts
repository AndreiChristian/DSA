import { createRandomArray } from "./utils.ts";

const random = createRandomArray(100);

const shellSort = (nums: number[]) => {
  console.log(...nums);
  const n = nums.length;
  let gap = Math.floor(n / 2);

  while (gap > 0) {
    for (let i = gap; i < n; i++) {
      const temp = nums[i];
      let j = i;

      while (j >= gap && nums[j - gap] > temp) {
        nums[j] = nums[j - gap];
        j = j - gap;
      }

      nums[j] = temp;
    }

    gap = Math.floor(gap / 2);
  }

  console.log(...nums);
};

shellSort(random);
