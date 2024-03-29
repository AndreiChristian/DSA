`
Given a string s, return the longest 
palindromic substring in s.

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
 
Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters.
`;

function longestPalindrome(s: string): string {
 
  if(s.length === 1) return s;

  const length = s.length;

  const dp:boolean[][] = Array.from({length:length}, () => Array(length).fill(false))

  let start = 0;
  let maxLength =1;

  for(let i=0; i<length; i++){
    dp[i][i] = true;
  }

  for( let i=0; i<length-1; i++){
    if(s[i]===s[i+1]){
      dp[i][i+1] = true
      start = i
      maxLength=2;
    }
  }

  for(let len =3; len<=length; len++){
    for(let i=0; i<=length -len; i++){

      const j = i + len -1;

      if(s[i] === s[j] && dp[i+1][j-1]){
        dp[i][j]=true;

        if(len>maxLength){
          start = i;
          maxLength = len;

        }

      }
    }
  }
  return s.substring(start,start + maxLength);

}


