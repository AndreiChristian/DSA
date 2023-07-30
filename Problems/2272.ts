function largestVariance(s: string): number {

  const charCounts:{[key:string]:number} = {}
  let maxCount = 0;
  let minCount = Infinity;

  for(let i=0; i<s.length; i++){

    const char = s[i];
    if(!charCounts[char]){
      charCounts[char]=1
    }else{
      charCounts[char] ++
    }

    const count = charCounts[char];
    if(count>maxCount) maxCount = count
    if(count<minCount) minCount = count


  }

  console.log(charCounts)

  return maxCount - minCount

}


console.log(largestVariance("aabaaa"))
console.log(largestVariance("abcd"))
