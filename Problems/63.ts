function uniquePathsWithObstacles(obstacleGrid: number[][]): number {

  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;

  const grid = Array.from({length:m}, () => Array(n).fill(0))

  if(obstacleGrid[0][0] === 1 ){
    return 0;
  } else {
    grid[0][0] = 1;
  }

  for(let i = 1; i<m;i++){
    grid[i][0] = obstacleGrid[i][0] === 1 ? 0:grid[i-1][0];
  }

  for(let i = 1; i<n;i++){
    grid[0][i] = obstacleGrid[0][i] === 1 ? 0:grid[0][i-1];
  }

  for(let i=1; i<m; i++){
    for(let j=1; j<n; j++){
      
      grid[i][j] = obstacleGrid[i][j] === 1 ? 0: grid[i-1][j] + grid[i][j-1]

    }
  }

  return grid[m-1][n-1]

}

console.log(uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]]))
console.log(uniquePathsWithObstacles([[0,1],[0,0]]))
console.log(uniquePathsWithObstacles([[0,0]]))
