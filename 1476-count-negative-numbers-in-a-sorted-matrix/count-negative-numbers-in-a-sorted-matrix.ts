function countNegatives(grid: number[][]): number {
  let result = 0;
  for(let i=0; i < grid.length; i++){
    const currentArray = grid[i];

    // find first negative number
    let left = 0;
    let right = currentArray.length - 1;

    while(left < right){
      let mid = Math.floor((left + right) / 2);

      if(currentArray[mid] >= 0){
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    if(currentArray[left] < 0){
      result += currentArray.length-left;
    }
    // console.log({
    //   i,
    //   left,
    //   right,
    //   countNegative: currentArray[left] !== 0 ? currentArray.length-left : 0
    // })
  }

  return result;
};