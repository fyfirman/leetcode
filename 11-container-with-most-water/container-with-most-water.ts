/**
    brute force solution
 */

// function maxArea(height: number[]): number {
//     let max = 0;
//     for(let i=0; i < height.length; i++){
//         for(let j=i; j < height.length; j++){
//             const area = Math.min(height[i], height[j]) * (j-i);
//             if(max < area){
//                 max = area
//             }
//         }
//     }
//     return max;
// };


/**
    key idea: two pointer

    time complexity: O(n)
 */
function maxArea(height: number[]): number {
    let max = 0;
    let left = 0;
    let right = height.length - 1;
    
    while(left < right){
        max = Math.max(max, Math.min(height[left], height[right]) * (right-left));

        if(height[left] <= height[right]){
            left++;
        } else {
            right--;
        }
    }

    return max;
}