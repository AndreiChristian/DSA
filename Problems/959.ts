/*

An n x n grid is composed of 1 x 1 squares where each 1 x 1 square consists of a
'/', '\', or blank space ' '. These characters divide the square into contiguous regions.
Given the grid grid represented as a string array, return the number of regions.
Note that backslash characters are escaped, so a '\' is represented as '\\'.

Example 1:
Input: grid = [" /","/ "]
Output: 2

Example 2:
Input: grid = [" /","  "]
Output: 1

Example 3:
Input: grid = ["/\\","\\/"]
Output: 5

Explanation: Recall that because \ characters are escaped, "\\/" refers to \/, and "/\\" refers to /\.

Constraints:
n == grid.length == grid[i].length
1 <= n <= 30
grid[i][j] is either '/', '\', or ' '.

*/

function regionsBySlashes(grid: string[]): number {

  const size = grid.length;

  const expandedGrid:number[][] = Array.from({length:size*2},()=> new Array(size *2).fill(0) ) 
  
  for(let i=0; i<size;i++){
      for(let j=0; j<size;j++){

      if(grid[i][j] === "/"){

        expandedGrid[i*2][j*2+1] = 1
        expandedGrid[i*2 + 1][j*2] = 1

      } else if(grid[i][j] === "//"){

        expandedGrid[i*2][j*2+1] = 1
        expandedGrid[i*2 + 1][j*2] = 1         

      }

    }
  }

  let regions = 0;
  for(let i=0; i<size*2;i++){

    for(let j=0; j<size*2; j++){

      if(expandedGrid[i][j] === 0){

        regions++
        dfs(expandedGrid,i,j);
      }
    }
  }
  return regions;

}

function dfs(grid:number[][],i:number,j:number):void{

  if(i<0 || i>=grid.length || j<0 || j>grid.length || grid[i][j] === 1) return;

  grid[i][j] = 1;

  dfs(grid,i+1,j)  
  dfs(grid,i,j+1)  
  dfs(grid,i-1,j)  
  dfs(grid,i,j-1)  

}

console.log(regionsBySlashes( [" /","/ "] ))
console.log(regionsBySlashes( [" /","  "] ))
console.log(regionsBySlashes( ["/\\","\\/"] ))
