/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const result = [1];

    for(let i=1; i < nums.length; i++){
        result[i] = result[i-1] * nums[i-1];
    }
    
    let post = 1;
    for(let i = nums.length - 1; i >= 0; i--){
        if(i === nums.length - 1){
            result[i] = result[i] * post;
            continue;
        }

        post = post * nums[i+1]
        result[i] = result[i] * post;
    }

    
    return result;
};