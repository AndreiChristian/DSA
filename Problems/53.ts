function maxSubArray(nums: number[]): number {
  let maxCurrent = nums[0];
  let maxGlobal = nums[0];

  for (let i = 1; i < nums.length; i++) {
    maxCurrent = Math.max(nums[i], maxCurrent + nums[i]);
    maxGlobal = Math.max(maxGlobal, maxCurrent);
  }

  return maxGlobal;
}

const nums1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const nums2 = [5, 4, -1, 7, 8];
const nums3 = [1];

console.log(maxSubArray(nums1));
console.log(maxSubArray(nums2));
console.log(maxSubArray(nums3));
