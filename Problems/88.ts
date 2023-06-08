// m non null numbers in nums1,
// n non null numbers in nums2,
// m + n elements in nums1

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let pointer = m + n - 1;
  m--;
  n--;

  while (n >= 0) {
    if (m < 0 || nums2[n] > nums1[m]) {
      nums1[pointer--] = nums2[n--];
    } else {
      nums1[pointer--] = nums1[m--];
    }
  }
}
