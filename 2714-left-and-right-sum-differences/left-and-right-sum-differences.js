/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    if(nums.length === 1){
        return [0]
    }

    const leftSum = [0];
    for(let i=1; i < nums.length; i++){
        leftSum[i] = leftSum[i-1] + nums[i-1];
    }

    const rightSum = [];
    rightSum[nums.length - 1] = 0;
    
    for(let i=nums.length-2; i >= 0; i--){
        rightSum[i] = rightSum[i+1] + nums[i+1];
    }

    const result = [];
    for(let i=0; i < nums.length; i++){
        result.push(Math.abs(leftSum[i]-rightSum[i]));
    }
    
    return result;
};