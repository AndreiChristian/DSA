function uniquePathsIII(grid: number[][]): number {

  const m = grid.length;
  const n = grid[0].length;

  let startX = 0;
  let startY = 0;
  let emptyCount = 0;

  for(let i =0; i<m; i++){
    for(let j =0; j<n; j++){
      if(grid[i][j] === 1){
        startX = i;
        startY = j;
      }
      if(grid[i][j]!== -1 ) emptyCount ++;
    }
  }

  return dfs(grid, startY, startX, emptyCount)

}

function dfs(grid:number[][], x:number,y:number,count:number):number{
  if(x<0 || x >= grid.length || y<0 || y >= grid[0].length || grid[x][y] === -1 ) return 0;

  if(grid[x][y] == 2) return count === 1 ? 1:0;

  const temp = grid[x][y]
  grid[x][y]=-1

  const paths = dfs(grid, x+1,y, count -1) + dfs(grid, x -1, y , count -1) + dfs(grid,x, y+1,count-1) + dfs(grid,x, y -1, count -1)

  grid[x][y]=temp;

  return paths;

}

console.log(uniquePathsIII([[1,0,0,0],[0,0,0,0],[0,0,2,-1]])); // Output: 2
console.log(uniquePathsIII([[1,0,0,0],[0,0,0,0],[0,0,0,2]])); // Output: 4
console.log(uniquePathsIII([[0,1],[2,0]])); // Output: 0

