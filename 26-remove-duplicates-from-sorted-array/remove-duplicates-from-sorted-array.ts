function removeDuplicates(nums: number[]): number {
    // loop entire nums
    let temp = 0;
    for(let i=1; i<nums.length; i++){
        if(nums[temp]!==nums[i]){
            nums[++temp] = nums[i];
        }
        
    }
    return ++temp;
};