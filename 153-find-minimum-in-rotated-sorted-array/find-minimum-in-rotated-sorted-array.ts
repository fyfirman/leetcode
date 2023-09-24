/**

  [3,4,5,1,2]
  l    m    r
          l(m) r

  # rotated

  l > r

  l = m + 1

  1,2

  l 

  [4,5,6,7,0,1,2]
  l      m     r



 */

function findMin(nums: number[]): number {
  let left = 0, right = nums.length - 1;

  let result = nums[left];

  while(left<=right){
    const mid = Math.floor((left+right)/2);

    console.log(result, nums[left], nums[mid], nums[right])
    result = Math.min(result, nums[left], nums[mid], nums[right])
  
    if(nums[left] < nums[mid]){
      left = mid + 1;
    } else {
      right = mid - 1;
    }

  }

  return result;
};