`
Given two strings s and t, return true if t is an anagram of s, and false otherwise.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
typically using all the original letters exactly once.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false
 
Constraints:
1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
`;

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  for (const char of t) {
    if (!s.includes(char)) {
      return false;
    }
  }

  return true;
}

const test1 = { s: "anagram", t: "nagaram" };
const test2 = { s: "rat", t: "car" };
const test3 = { s: "listen", t: "silent" };
const test4 = { s: "triangle", t: "integral" };
const test5 = { s: "hello", t: "world" };
const test6 = { s: "elbow", t: "below" };

const test7 = { s: "abcde", t: "edcba" }; // A simple anagram
const test8 = { s: "aab", t: "bba" }; // Not an anagram because of unequal number of 'a's and 'b's
const test9 = { s: "", t: "" }; // Edge case with empty strings, should return true
const test10 = { s: "a", t: "a" }; // Edge case with single character, should return true
const test11 = { s: "ab", t: "a" }; // Unequal lengths, should return false
const test12 = { s: "aabbcc", t: "aabbc" }; // Missing one character, should return false
const test13 = { s: "aabbcc", t: "aabbbcc" }; // Extra character, should return false
const test14 = {
  s: "abcdefghijklmnopqrstuvwxyz",
  t: "zyxwvutsrqponmlkjihgfedcba",
}; // All distinct characters

console.log(isAnagram(test7.s, test7.t)); // Expected: true
console.log(isAnagram(test8.s, test8.t)); // Expected: false
console.log(isAnagram(test9.s, test9.t)); // Expected: true
console.log(isAnagram(test10.s, test10.t)); // Expected: true
console.log(isAnagram(test11.s, test11.t)); // Expected: false
console.log(isAnagram(test12.s, test12.t)); // Expected: false
console.log(isAnagram(test13.s, test13.t)); // Expected: false
console.log(isAnagram(test14.s, test14.t)); // Expected: true

console.log(isAnagram(test1.s, test1.t)); // Expected: true
console.log(isAnagram(test2.s, test2.t)); // Expected: false
console.log(isAnagram(test3.s, test3.t)); // Expected: true
console.log(isAnagram(test4.s, test4.t)); // Expected: true
console.log(isAnagram(test5.s, test5.t)); // Expected: false
console.log(isAnagram(test6.s, test6.t)); // Expected: true
