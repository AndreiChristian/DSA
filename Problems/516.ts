function longestPalindromeSubseq(s: string): number {

	const l = s.length;
	const dp:number[][] = Array.from({length:l},()=> Array(l).fill(0))

	for(let i =0; i<l; i++){
		dp[i][i] = 1;
	}

	for(let i = l -1; i>=0; i--){
		for(let j = i + 1; j<l; j++){
			if(s[i] === s[j]){
				dp[i][j] = dp[i+1][j-1] + 2;
			} else {
				dp[i][j] = Math.max(dp[i+1][j], dp[i][j-1])
			}
		}
	}

	return dp[0][l-1]

}
