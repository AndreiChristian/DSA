function deleteAndEarn(nums: number[]): number {

  const maxNum = Math.max(...nums);
  const counts = new Array(maxNum + 1).fill(0);

  for(const num of nums){
    counts[num] += 1 
  }

  const dp:number[] = new Array(maxNum + 1).fill(0)
  dp[1] = counts[1]
  dp[2] = Math.max(counts[1],counts[2]);

  for(let i=3; i<= maxNum; i++){

    dp[i] = Math.max(dp[i-2] + dp[i], dp[i-1])

  }

  return dp[maxNum]

}

