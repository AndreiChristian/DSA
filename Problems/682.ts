function calPoints(operations: string[]): number {

  const scoreStack:number[] = []

  for(const o of operations){

    if( o === "+"){
      const secondLast = scoreStack[scoreStack.length - 2]
      const last = scoreStack[scoreStack.length - 1]
  
      scoreStack.push(secondLast + last)

    } else if ( o === "D"){   

      const last = scoreStack[scoreStack.length - 1]  
      scoreStack.push(last * 2)

    } else if ( o === "C"){

      scoreStack.pop()

    } else {

      scoreStack.push(parseInt(o))

    }

  }

  return scoreStack.reduce((a,b)=>a+b,0)
}

console.log(calPoints(["5","2","C","D","+"]))
console.log(calPoints(["5","-2","4","C","D","9","+","+"]))
