const map = new Map<number,number>()

function climb(n:number):number{

  if(n<=1) return 1;

  if(map.has(n)) return map.get(n)!;

  const result = climbStairs(n-1) + climbStairs(n-2);

  map.set(n,result)

  return result;

}

function climbStairs(n: number): number {


  return climb(n)

}

console.log(climbStairs(2))
console.log(climbStairs(3))
console.log(climbStairs(10))
console.log(climbStairs(20))
console.log(climbStairs(40))

