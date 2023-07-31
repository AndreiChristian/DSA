function traverse(m:number, n:number, map:Map<string,number> ):number{

  if(m === 1 && n === 1) return 1;
  if(m === 0 || n === 0) return 0;

  const key = `${m}:${n}`

  if(map.has(key)) return map.get(key)!;

  const result = traverse(m-1,n,map) + traverse(m,n-1,map);

  map.set(key, result)

  return result

}

function uniquePaths(m: number, n: number): number {

  const map = new Map<string,number>();

  return traverse(m,n,map)

}

console.log(uniquePaths(3,7))
console.log(uniquePaths(3,2))
