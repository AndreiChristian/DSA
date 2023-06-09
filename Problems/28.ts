function strStr(haystack: string, needle: string): number {
  return haystack.indexOf(needle);
}

const haystack1 = "sadbutsad";
const needle1 = "sad";

const haystack2 = "leetcode";
const needle2 = "leeto";

console.log(strStr(haystack1, needle1));
console.log(strStr(haystack2, needle2));
