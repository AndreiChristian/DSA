function minimumDeleteSum(s1: string, s2: string) {

  const map = new Map<string,number>();

  for(const s of s1){
    if(map.has(s)){
      map.set(s,map.get(s)!+1)
    } else {
      map.set(s,1)
    }
  }

  for(const s of s2){
    if(map.has(s)){
      map.set(s,map.get(s)!-1)
    } else {
      map.set(s,1)
    }
  }

  let sum = 0;

  for(const s of map.keys()){
    const v:number = map.get(s)!
    if(v!==0){
      sum += Math.abs(v) * s.charCodeAt(0) 
    }
  }

  console.log(sum)
  console.log("---------")

}

minimumDeleteSum("sea","eat")
minimumDeleteSum("delete","leet")
minimumDeleteSum("a","at")
