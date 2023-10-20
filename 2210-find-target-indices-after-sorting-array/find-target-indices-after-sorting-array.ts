/**
  key idea: no binary search. simple approach O(n)
 */
function targetIndices(nums: number[], target: number): number[] {
  const sortedNums = nums.sort((a, b) => a - b);

  const result = [];
  for(let i=0; i < nums.length; i++){
    if(sortedNums[i] === target){
      result.push(i)
    }
  }
  return result;  
};