/**
  key idea: find first negative number

  1. loop array - O(n)
  2. binary search - find first negative number index
  3. check the index result is actual negative number
  4. if yes, count the result
 */

function countNegatives(grid: number[][]): number {
  let result = 0;

  for(let i=0; i < grid.length; i++){
    let left = 0;
    let right = grid[i].length - 1;

    while(left < right){
      let mid = Math.floor((left + right) / 2);

      if(grid[i][mid] >= 0){
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    if(grid[i][left] < 0){
      result += grid[i].length - left;
    }
  }

  return result;
};