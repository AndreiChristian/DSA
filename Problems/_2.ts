/*
function fib(n:number):number{

  if(n<=2) return n;

  return fib(n-1) + fib(n-2)

} */

const fibSequence = [1,1]

function fib(n:number):number{

  while (fibSequence.length <=n){

    fibSequence.push(fibSequence[fibSequence.length -1] + fibSequence[fibSequence.length -1])

  }

  return fibSequence[fibSequence.length -1]
}


console.time("fib")
console.log(fib(1000))
console.timeEnd("fib")
