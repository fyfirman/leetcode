function threeSum(nums: number[]): number[][] {
    nums = nums.sort((a,b) => a-b);
    const results = [];

    console.log(nums);
    for(let i=0; i<nums.length; i++){
        if(i > 0 && nums[i-1] === nums[i]){
            continue;
        }

        let left = i + 1;
        let right = nums.length - 1;

        while(left < right){
            const sum = nums[i] + nums[left] + nums[right];
            if(sum > 0){
                right -= 1;
            }
            if(sum < 0){
                left += 1;
            }
            if(sum === 0){
                results.push([nums[i], nums[left], nums[right]]);
                left += 1;
                while(nums[left-1] === nums[left] && left < right){
                    left+=1;
                }
            }
        }
    }

    return results;
};