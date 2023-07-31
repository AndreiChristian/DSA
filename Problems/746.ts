function climb(cost:number[],index:number, map:Map<number,number>):number{

  if (map.has(index)) return map.get(index)!

  if(index >=cost.length) return 0

  const result = cost[index] + Math.min(climb(cost, index +1,map),climb(cost, index + 2,map))

  map.set(index,result);

  return result;

}

function minCostClimbingStairs(cost: number[]): number {

  const map = new Map<number,number>()

  return Math.min(climb(cost, 0,map),climb(cost,1,map))

}

console.log(minCostClimbingStairs([10,15,20]))
console.log(minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1]))

