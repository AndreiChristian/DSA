// implementation one => O(n^2)

function productExceptSelf1(nums: number[]): number[] {
  const answer: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    let product = 1;

    for (let j = 0; j < nums.length; j++) {
      if (nums[i] != nums[j]) {
        product = product * nums[j];
      }
    }

    answer.push(product);
  }

  return answer;
}

const nums1 = [1, 2, 3, 4];
const nums2 = [-1, 1, 0, -3, 3];

console.log(productExceptSelf1(nums1));
console.log(productExceptSelf1(nums2));

// approach 2

function productExceptSelf2(nums: number[]): number[] {
  const answer: number[] = new Array(nums.length).fill(1);
  const left: number[] = new Array(nums.length).fill(1);
  const right: number[] = new Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    left[i] = left[i - 1] * nums[i - 1];
  }

  for (let j = nums.length - 2; j > 0; j--) {
    right[j] = right[j + 1] * nums[j + 1];
  }

  for (let i = 0; i < nums.length; i++) {
    answer[i] = left[i] * right[i];
  }

  return answer;
}

console.log(productExceptSelf2(nums1));
console.log(productExceptSelf2(nums2));
