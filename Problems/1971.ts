type Grahph = {[node:number]:number[]}

function dfs(node:number, destination: number, visited:boolean[],graph:Grahph):boolean{

  if(node === destination ) return true;

  visited[node] = true;

  for(const neighbor of graph[node]){

    if(!visited && dfs(neighbor, destination, visited, graph)) return true

  }

  return false

}

function validPath(n: number, edges: number[][], source: number, destination: number): boolean{

  const graph:Grahph = {};

  for(let i = 0; i<n ; i++){
    graph[i] = []
  }

  for(const [u,v] of edges){
    graph[u].push(v)
    graph[v].push(u)
  }

  const vistied: boolean[] = new Array(n).fill(false)

  return dfs(source, destination, vistied, graph);

}
