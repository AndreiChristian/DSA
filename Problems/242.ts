function isAnagram(s: string, t: string): boolean {

  if(s.length !== t.length) return false;

  const letterMap = new Map<string,number>();

  for(const l of s){
    !letterMap.has(l) && letterMap.set(l,1)

    letterMap.has(l) && letterMap.set(l, letterMap.get(l)! +1)
  }

  for(const l of t){

    if(!letterMap.has(l))  return false;
    
    if(letterMap.get(l) === 0) return false;

    letterMap.set(l, letterMap.get(l)! -1)

  } 

  for(const [k,v] of letterMap.entries()){
    if(v!==0) return false;
  }

  return true

}
