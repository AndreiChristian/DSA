// You are given an integer array nums. You are initially positioned at the
// array's first index, and each element in the array represents your maximum jump length at that position.
// Return true if you can reach the last index, or false otherwise.

// Example 1:
// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

// Constraints:
// 1 <= nums.length <= 104
// 0 <= nums[i] <= 105

function canJump(nums: number[]): boolean {
  if (nums.length === 1) {
    return true;
  }

  if (nums[0] === 0) {
    return false;
  }

  if (nums[nums.length - 1] === 0) {
    nums.pop();
  }

  if (!nums.includes(0)) {
    return true;
  }

  let numIterations = 0;

  while (nums.includes(0)) {
    numIterations++;
    let isThereAWayOver = false;

    const index = nums.findIndex((num) => num === 0);
    console.log(index);

    for (let i = index - 1; i >= 0; i--) {
      if (nums[i] > index - i) {
        isThereAWayOver = true;
        continue;
      }
    }

    if (!isThereAWayOver) {
      return false;
    }

    nums = nums.slice(index, 1);
  }

  console.log(numIterations);

  return true;
}

console.log(canJump([2, 0, 1, 0, 1]));
