`
Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.
All occurrences of a character must be replaced with 
another character while preserving the order of characters.
 No two characters may map to the same character, but a character may map to itself.

Example 1:
Input: s = "egg", t = "add"
Output: true

Example 2:
Input: s = "foo", t = "bar"
Output: false

Example 3:
Input: s = "paper", t = "title"
Output: true
 
Constraints:
1 <= s.length <= 5 * 104
t.length == s.length
s and t consist of any valid ascii character.
`;

function isIsomorphic(s: string, t: string): boolean {
  let map_s_t = new Map();
  let map_t = new Set();

  for (let i = 0; i < s.length; i++) {
    let char_s = s[i];
    let char_t = t[i];

    if (map_s_t.has(char_s)) {
      if (map_s_t.get(char_s) !== char_t) {
        return false;
      }
    } else if (map_t.has(char_t)) {
      return false;
    } else {
      map_s_t.set(char_s, char_t);
      map_t.add(char_t);
    }
  }
  return true;
}

console.log(isIsomorphic("egg", "add"));
console.log(isIsomorphic("paper", "title"));
console.log(isIsomorphic("foo", "bar"));
console.log(isIsomorphic("badc", "baba"));
