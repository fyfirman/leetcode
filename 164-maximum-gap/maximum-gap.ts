function maximumGap(nums: number[]): number {
    let maxGap = 0;
    nums.sort((a,b) => a - b).forEach((_, index) => {
        if(index === nums.length - 1){
            return;
        }

        const gap = nums[index + 1] - nums[index];

        if(gap > maxGap) {
            maxGap = gap;
        } 
    })

    return maxGap;
};