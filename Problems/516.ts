function longestPalindromeSubseq(s: string): number{
 
  if(s.length === 1) return 1;

  const length = s.length;

  const dp:boolean[][] = Array.from({length:length}, () => Array(length).fill(false))

  let maxLength =1;

  for(let i=0; i<length; i++){
    dp[i][i] = true;
  }

  for( let i=0; i<length-1; i++){
    if(s[i]===s[i+1]){
      dp[i][i+1] = true
      maxLength=2;
    }
  }

  for(let len =3; len<=length; len++){
    for(let i=0; i<=length -len; i++){

      const j = i + len -1;

      if(s[i] === s[j] && dp[i+1][j-1]){
        dp[i][j]=true;

        if(len>maxLength){
          maxLength = len;

        }

      }
    }
  }

  return maxLength

}

