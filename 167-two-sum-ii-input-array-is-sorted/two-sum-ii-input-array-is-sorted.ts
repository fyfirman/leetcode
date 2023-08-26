/**
    key idea: remember two pointer is left right
 */
function twoSum(nums: number[], target: number): number[] {
    let left = 0;
    let right = nums.length - 1;

    while(true){
        if(nums[left] + nums[right] === target) {
            return [left+1, right+1]
        }

        if(nums[left] + nums[right] < target){
            left += 1;
        }
        
        if(nums[left] + nums[right] > target){
            right -= 1;
        }
    }
};