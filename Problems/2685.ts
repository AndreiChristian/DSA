declare type Graph = {[node: number]: number[]};

function dfs(graph: Graph, current: number, visited: boolean[], vertices: number[]) {
  visited[current] = true;
  vertices.push(current);

  for (const neighbor of graph[current]) {
    if (!visited[neighbor]) {
      dfs(graph, neighbor, visited, vertices);
    }
  }
}

function isComplete(graph: Graph, vertices: number[]): boolean {
  const n = vertices.length;
  let edgeCount = 0;

  for (const v of vertices) {
    edgeCount += graph[v].length;
  }

  return edgeCount === n * (n - 1);
}

function countCompleteComponents(n: number, edges: number[][]): number {
  const graph: Graph = {};
  const visited: boolean[] = new Array(n).fill(false);
  let count = 0;

  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }

  for (const [a, b] of edges) {
    graph[a].push(b);
    graph[b].push(a);
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      const vertices: number[] = [];
      dfs(graph, i, visited, vertices);
      if (isComplete(graph, vertices)) {
        count++;
      }
    }
  }

  return count;
}

