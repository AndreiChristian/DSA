/*

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

Example 2:
Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.

Example 3:
Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
 
Constraints:
3 <= nums.length <= 3000
-105 <= nums[i] <= 105

*/

function sort(nums:number[]){

  for(let i=0; i<nums.length; i++){
    for(let j = 0; j<nums.length; j++){

      if(nums[i]<nums[j]){

        [nums[i],nums[j]]= [nums[j],nums[i]]

      } else if(nums[i] === nums[j]){
        nums.slice(j,1)
      }
    }
  }
}

function threeSum(nums: number[]): number[][] {

  const pairs:number[][] = []
  sort(nums)

  for(let i =0; i<nums.length - 2; i++){

    let start = i+1;
    let end = nums.length -1;


    while(start<end){

     if(nums[i] + nums[start] + nums[end] === 0 ){

        pairs.push([nums[i],nums[start],nums[end]])
        break

      } else if(nums[i] + nums[start] + nums[end] > 0){

        end --

      } else {

        start ++

      }

    }

  }

  return pairs

}

const input1 = [-1,0,1,2,-1,-4]
const input2 = [0,1,1]
const input3 = [0,0,0]
const input4 = [0,0,0,0] 


console.log(threeSum(input1))
console.log(threeSum(input2))
console.log(threeSum(input3))
console.log(threeSum(input4))
