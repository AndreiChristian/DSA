function containsNearbyDuplicate(nums: number[], k: number): boolean {

  const map = new Map<number,number>();

  for(let i=0; i<nums.length; i++){
    if(map.has(nums[i])){
      const j = map.get(nums[i])!;
      if(Math.abs(i-j) <=k) return true
      map.set(nums[i],i)
    } else {
      map.set(nums[i],i)
    }
  }

  return false

}
