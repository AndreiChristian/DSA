function buildArray(nums: number[]): number[] {

  const permutations:number[] = []

  for (let i =0; i <nums.length; i++){
    permutations[i] = nums[nums[i]]
  }

  return permutations

}


