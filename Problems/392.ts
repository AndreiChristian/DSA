function isSubsequence(s: string, t: string): boolean {

  let i=0;
  let j=0;

  while(i<s.length && j<t.length){
    if(s[i] === t[i]) {
      i++
    }
    j++
  }

  return i === s.length;

}
