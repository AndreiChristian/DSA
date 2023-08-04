function maxDepth(s: string): number {

  let current = 0;
  let max = 0;

  for(const char of s){

    if(char === ")"){
      current --;
    }

    if (char === "(" ){
      current ++;
      if(current > max ) max = current
    }

  }

  return max 

}

console.log(maxDepth("(1+(2*3)+((8)/4))+1"))
console.log(maxDepth("(1)+((2))+(((3)))"))
