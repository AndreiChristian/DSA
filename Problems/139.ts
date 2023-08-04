function wordBreak(s: string, wordDict: string[]): boolean {

  const wordsSet = new Set(wordDict);
  const dp:boolean[] = Array(s.length + 1).fill(false);
  dp[0] = true;

  for(let i = 1; i<=s.length; i++){
    for(let j =0; j<=i; j++){
      if(dp[j] && wordsSet.has(s.substring(j,i))){
        dp[i] = true
        break
      }
    }
  }

  return dp[s.length]

}

console.log(wordBreak("leetcode", ["leet", "code"])); // Output: true
console.log(wordBreak("applepenapple", ["apple", "pen"])); // Output: true
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])); // Output: false
