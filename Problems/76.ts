function minWindow(s: string, t: string): string {
  if (s.length < t.length) return "";

  const frequencyMap = new Map<string, number>();

  for (let char of t) {
    frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
  }

  let required = frequencyMap.size;
  let formed = 0;
  let left = 0,
    right = 0;
  let minLen = Infinity;
  let minSubstring = "";

  const windowCountMap = new Map<string, number>();

  while (right < s.length) {
    let char = s[right];

    windowCountMap.set(char, (windowCountMap.get(char) || 0) + 1);

    if (
      frequencyMap.has(char) &&
      windowCountMap.get(char) === frequencyMap.get(char)
    ) {
      formed++;
    }

    while (left <= right && formed === required) {
      char = s[left];

      if (right - left + 1 < minLen) {
        minLen = right - left + 1;
        minSubstring = s.slice(left, right + 1);
      }

      windowCountMap.set(char, windowCountMap.get(char)! - 1);

      if (
        frequencyMap.has(char) &&
        windowCountMap.get(char)! < frequencyMap.get(char)!
      ) {
        formed--;
      }

      left++;
    }

    right++;
  }

  return minLen === Infinity ? "" : minSubstring;
}
