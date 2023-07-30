/* There is a strange printer with the following two special properties:

The printer can only print a sequence of the same character each time.
At each turn, the printer can print new characters starting from and ending
at any place and will cover the original existing characters.
Given a string s, return the minimum number of turns the printer needed to print it.

Example 1:
Input: s = "aaabbb"
Output: 2
Explanation: Print "aaa" first and then print "bbb".

Example 2:
Input: s = "aba"
Output: 2
Explanation: Print "aaa" first and then print "b" from the second place of the string,
which will cover the existing character 'a'.
 

Constraints:
1 <= s.length <= 100
s consists of lowercase English letters.
 */

function strangePrinter2(s: string): number {

  const set = new Set<string>();

  for(let i=0; i<s.length; i++){
    set.add(s[i])
  }

  return set.size;

}

function strangePrinter(s: string): number {

  const n = s.length;
  const dp: number[][] = Array.from({length:n}, () => Array(n).fill(0))

  for(let k=1; k<=n; k++){
    for(let i=0; i<=n-k; i++){
      const j = i + k -1;

      if(k==1){
        dp[i][j] = 1;
        continue
      }

      dp[i][j]=k;
      
      for(let m=i; m<j; m++){
        const turns = dp[i][m] + dp[m+1][j] - (s[m]===s[j]?1:0)
        dp[i][j]= Math.min(dp[i][j],turns)
      }

    }
  }
  return dp[0][n-1];
}

console.log(strangePrinter("aaabbb"))
console.log(strangePrinter("aba"))
console.log(strangePrinter("abcabc"))



