`
Given an integer array nums and an integer k, 
return the k most frequent elements. You may return the answer in any order.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.
`;

function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      const value = map.get(nums[i]);
      map.set(nums[i], value! + 1);
    } else {
      map.set(nums[i], 1);
    }
  }

  const freqArr = Array.from(map.entries());

  freqArr.sort((a, b) => b[1] - a[1]);

  return freqArr.slice(0, k).map((entry) => entry[0]);
}

const nums1 = [1, 1, 1, 2, 2, 3];
const nums2 = [1];
const nums3 = [1, 1, 1, 3, 3, 4, 5, 7, 10, 10, 10, 10];

// console.log(topKFrequent(nums1, 2));
// console.log(topKFrequent(nums2, 1));
// console.log(topKFrequent(nums3, 3));

const array = [1, 2, 9, 7, 10, 11, 7, 3, 5];

array.sort((a, b) => {
  console.log(`a: ${a}, b: ${b}`);
  return a - b;
});
