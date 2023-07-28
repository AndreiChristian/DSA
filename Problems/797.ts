function dfs( graph:number[][], node:number,target:number, path:number[][], currentPath:number[]){

  currentPath.push(node)

  if(node === target){
    path.push([...currentPath])
    return 
  } 

  for( const neighbors of graph[node] ){

    dfs(graph,neighbors, target, path, currentPath)
    currentPath.pop()

  }
   

}

function allPathsSourceTarget(graph: number[][]): number[][] {

  const target = graph.length -1;

  const paths:number[][] = [];
  const currentPath:number[] = [];

  dfs(graph,0, target, paths,currentPath) 

  return paths

}

console.log(allPathsSourceTarget([[1,2],[3],[3],[]]))
console.log(allPathsSourceTarget([[4,3,1],[3,2,4],[3],[4],[]]))
