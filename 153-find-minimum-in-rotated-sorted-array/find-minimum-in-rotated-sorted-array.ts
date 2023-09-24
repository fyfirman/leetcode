/**
  key idea: different logic to put the num
 */

function findMin(nums: number[]): number {
  let left = 0, right = nums.length - 1;

  let result = nums[left];

  while(left<=right){
    const mid = Math.floor((left+right)/2);

    result = Math.min(result, nums[left], nums[mid], nums[right])
  
    if(nums[left] < nums[mid]){
      left = mid + 1;
    } else {
      right = mid - 1;
    }

  }

  return result;
};