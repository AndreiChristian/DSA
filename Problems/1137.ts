function tribonacci(n: number): number {

  const tribSeq = [0,1,1];

  if(n<=2){
    return tribSeq[n]
  }

  for(let i=0; i<n-2; i++){

    const length = tribSeq.length; 

    tribSeq.push(tribSeq[length - 3] + tribSeq[length -2] + tribSeq[length-1] ) 
  }

  return tribSeq[tribSeq.length - 1] 
}

console.log(tribonacci(4))
console.log(tribonacci(25))

