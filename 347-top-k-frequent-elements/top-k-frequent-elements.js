/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const countHash = {};

    nums.forEach((num) => {
        if(!countHash[num]){
            Object.assign(countHash, {[num]: 1})
            return;
        }

        countHash[num] += 1;
    });

    const set = new Set();
    const sortedFreqNums = Object.entries(countHash).sort((a,b) => b[1] - a[1]);

    for(let i = 0; i < sortedFreqNums.length; i++){
        if(set.has(sortedFreqNums[i][0])) return;
        set.add(sortedFreqNums[i][0]);

        if(set.size === k){
            break;
        }
    }

    return [...set]
};