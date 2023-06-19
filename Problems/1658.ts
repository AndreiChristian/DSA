// You are given an integer array nums and an integer x. In one operation,
// you can either remove the leftmost or the rightmost element from the array nums and subtract its value from x.
// Note that this modifies the array for future operations.

// Return the minimum number of operations to reduce x to exactly 0 if it is possible, otherwise, return -1.

// Example 1:

// Input: nums = [1,1,4,2,3], x = 5
// Output: 2
// Explanation: The optimal solution is to remove the last two elements to reduce x to zero.
// Example 2:

// Input: nums = [5,6,7,8,9], x = 4
// Output: -1
// Example 3:

// Input: nums = [3,2,20,1,1,3], x = 10
// Output: 5
// Explanation: The optimal solution is to remove the last three elements and the first two elements
// (5 operations in total) to reduce x to zero.

// Constraints:

// 1 <= nums.length <= 105
// 1 <= nums[i] <= 104
// 1 <= x <= 109

function minOperations(nums: number[], x: number): number {
  console.log("----");
  console.log("Initital array", nums, ", X:", x);

  const greedyArray: number[] = [];

  let i = 0;
  let j = nums.length - 1;

  while (x > 0 && i < j) {
    let min = nums[i];
    if (nums[j] < min) {
      min = nums[j];
      j--;
    } else {
      i++;
    }

    x = x - min;
    greedyArray.push(min);
    console.log(greedyArray);
  }

  if (x != 0) {
    return -1;
  }

  return nums.length - greedyArray.length;
}

const n7 = [1, 1, 4, 2, 3];
const x7 = 5;
const n9 = [5, 6, 7, 8, 9];
const x9 = 4;
const n10 = [3, 2, 20, 1, 1, 3];
const x10 = 10;
const nums1: number[] = [1, 2, 3, 4, 5];
const x1: number = 15;
const nums2: number[] = [1, 2, 3, 4, 5];
const x2: number = 1;
const nums3: number[] = [5, 2, 3, 1, 4];
const x3: number = 7;
const nums4: number[] = [1, 1, 3, 2, 2];
const x4: number = 4;
const nums5: number[] = [2, 3, 1, 4, 2];
const x5: number = 10;
const nums6: number[] = [1, 2, 3, 4, 5];
const x6: number = 0;

console.log(minOperations(nums1, x1));
console.log(minOperations(nums2, x2));
console.log(minOperations(nums3, x3));
