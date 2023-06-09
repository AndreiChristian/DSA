function longestConsecutive(nums: number[]): number {
  if (!nums || nums.length === 0) {
    return 0;
  }

  const set = new Set(nums);

  let longest = 0;

  for (let value of set) {
    let current = 0;

    if (!set.has(value - 1)) {
      while (set.has(value + 1)) {
        current++;
        value++;
      }
    }

    if (current > longest) {
      longest = current;
    }
  }

  return longest + 1;
}

const nums1 = [100, 4, 200, 1, 3, 2];

const nums2 = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];

console.log(longestConsecutive(nums1));
console.log(longestConsecutive(nums2));
