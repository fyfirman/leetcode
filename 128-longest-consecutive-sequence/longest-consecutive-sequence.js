/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const set = new Set(nums);

    let longestSeq = 0;
    
    for(let i = 0; i < nums.length; i++){
        if(set.has(nums[i]-1)){
            continue;
        }

        let seq = 0;
        while(set.has(nums[i] + seq)){
            seq++;
        }
        if(seq > longestSeq){
            longestSeq = seq;
        }
    }

    return longestSeq;
};