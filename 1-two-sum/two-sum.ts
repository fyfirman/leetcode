/**
    brute force
    
    time comp : O(n^2)
 */

// function twoSum(nums: number[], target: number): number[] {
//     for(let i = 0; i < nums.length; i++){
//         for(let j = i + 1; j < nums.length; j++){
//             if(nums[i] + nums[j] === target){
//                 return [i, j];
//             }
//         }
//     }
// };


/**
    hashmap complementary

    time comp : O(n)
 */

function twoSum(nums: number[], target: number): number[] {
    const map : Record<number, number> = {};

    // build hashmap 
    for(let i = 0; i < nums.length; i++){
        Object.assign(map, {[target-nums[i]] : i})
    }

    for(let i = 0; i < nums.length; i++){
        if(!!map[nums[i]] && i !== map[nums[i]]){
            return [i, map[nums[i]]]
        }
    }
}