function firstMissingPositive(nums: number[]): number {
    let i = 0;

    while(i < nums.length){
        if(nums[i] === i || !nums[i]){
            i++;
            continue;
        }

        let correctIndex = nums[i];
        if(correctIndex < 1 || correctIndex > nums.length || nums[correctIndex] === correctIndex){
            nums[i] = undefined;
            continue;
        }
        [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
    }

    for(let i=1; i <= nums.length; i++){
        if(!nums[i]){
            return i;
        }
    }

    return 0;
};