/*
 You are given an array of integers nums, there is a sliding window of size
 k which is moving from the very left of the array to the very right.
 You can only see the k numbers in the window. Each time the sliding window moves right by one position.

Return the max sliding window.
*/



function maxSlidingWindow(nums: number[], k: number): number[] {

  const maxWindow:number[] = [];

  let i =0;

  while(i+k<=nums.length){

    let max = -Number.MAX_VALUE
    for(let j=i; j<i+k; j++){
      if(max<nums[j]){
        max = nums[j];
      }
    }
    maxWindow.push(max) 
    i++
  }
  return maxWindow
}

console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7],3))
console.log(maxSlidingWindow([1],1))
