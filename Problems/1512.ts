function numIdenticalPairs(nums: number[]): number {

  let count = 0;

  for(let i =0; i<nums.length -1; i++){

    for(let j =0; j<nums.length -1; j++){


      if(nums[i]===nums[j]){
        count++
      }

    }

  }

  return count

}
