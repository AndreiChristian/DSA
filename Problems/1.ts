// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one
// solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, boolean>();

  for (const n of nums) {
    if (map.has(target - n)) {
      if (n != target - n) {
        const firstIndex = nums.indexOf(n);
        const secondIndex = nums.indexOf(target - n);
        return [firstIndex, secondIndex];
      } else {
        const firstIndex = nums.indexOf(n);
        const secondIndex = nums.indexOf(target - n, firstIndex + 1);
        return [firstIndex, secondIndex];
      }
    } else if (!map.has(n)) {
      map.set(n, true);
    } else {
      continue;
    }
  }

  return [];
}

const nums1 = [2, 7, 11, 15];
const target1 = 9;
const nums2 = [3, 2, 4];
const target2 = 6;

const nums3 = [3, 3];
const target3 = 6;

console.log(twoSum(nums1, target1));
console.log(twoSum(nums2, target2));
console.log(twoSum(nums3, target3));
