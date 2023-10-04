/**
  1. find exact value
 */

// function search(nums: number[], target: number): number {
//     let left = 0;
//     let right = nums.length - 1;
    
//     while(left < right){    
//         let mid = Math.floor((left + right) / 2);

//         if(nums[mid] === target){
//             return mid;
//         }

//         if(nums[mid] > target){
//             right = mid - 1;
//         } else {
//             left = mid + 1;
//         }
//     }

//     return -1;
// };

/**
  2. find upper bound
 */

function search(nums: number[], target: number): number {
    let left = 0, right = nums.length - 1;
    
    while(left < right){    
        const mid = Math.floor((left + right) / 2);

        if(nums[mid] >= target){
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    if(nums[left] !== target){
      return -1;
    }

    return left;
};

/**
  3. find lower bound -- not working for binary search
 */

// function search(nums: number[], target: number): number {
//     let left = 0, right = nums.length - 1;
    
//     while(left < right){    
//         const mid = Math.floor((left + right) / 2);

//         if(nums[mid] < target){
//             left = mid;
//         } else {
//             right = mid - 1;
//         }
//     }

//     console.log(left)

//     if(nums[left] !== target){
//       return -1;
//     }

//     return left;
// };