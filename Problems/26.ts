function removeDuplicates(nums: number[]): number {
  if (nums.length === 1) return 1;

  let p2 = 0;
  let p1 = 0;

  while (p2 < nums.length) {
    if (nums[p1] < nums[p2]) {
      nums[p1 + 1] = nums[p2];
      p1++;
    }
    p2++;
  }
  return p1 + 1;
}

const nums1 = [1, 1, 2];
const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

const k1 = removeDuplicates(nums1);
const k2 = removeDuplicates(nums2);

console.log(nums1, k1);
console.log(nums2, k2);
