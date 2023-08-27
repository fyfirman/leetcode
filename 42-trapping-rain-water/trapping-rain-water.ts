/**
    key idea: monotonic stack -> can be change with only greater height (not looking the next value),
              thus it can rid of O(m) - while. Then looking the minimum of those two values

    space complexity: O(n)
 */

// interface StackItem {
//     height: number;
//     index: number;
// }

// function findHoles(heights: number[]): number[] {
//     const nextGreaterIndex: number[] = new Array(heights.length).fill(-1); 
//     let stack: StackItem[] = [];

//     for(let i = heights.length - 1; i >= 0; i--){ // O(n)
//         while(stack.length > 0){
//             if(stack[stack.length-1].height > heights[i]){
//                 nextGreaterIndex[i] = stack[stack.length-1].index;
//                 break;
//             }
//             stack.pop();
//         }
//         stack.push({
//             height: heights[i],
//             index: i
//         });
//     }
    
//     const prevGreaterIndex: number[] = new Array(heights.length).fill(-1); 
//     stack = [];

//     for(let i = 0; i < heights.length; i++){ // O(n)
//         while(stack.length > 0){
//             if(stack[stack.length-1].height > heights[i]){
//                 prevGreaterIndex[i] = stack[stack.length-1].index;
//                 break;
//             }
//             stack.pop();
//         }
//         stack.push({
//             height: heights[i],
//             index: i
//         });
//     }

//     const holes: number[] = new Array(heights.length).fill(-1);
//     for(let i = 0; i < heights.length; i++){ // O(n)
//         if(prevGreaterIndex[i] !== -1 && nextGreaterIndex[i] !== -1){
//             const waterHeight = Math.min(heights[prevGreaterIndex[i]], heights[nextGreaterIndex[i]]);
            
//             holes[i] = 1;
//         }
//     }

//     return holes;
// }


// function trap(heights: number[]): number {
//     const holes = findHoles(heights);
//     let water = 0;

//     let left = 0;
//     let right = 1;

//     while(left < heights.length && right < heights.length){
//         while(holes[left+1] === -1){
//             left++;
//         }
//         right = left+1;
//         while(holes[right] !== -1 && right < heights.length){
//             right++;
//         }

//         const waterHeight = Math.min(heights[left], heights[right]);
//         while(left < right && right - left !== 1){
//             left++;
//             water += waterHeight - heights[left];
//         }

//     }

//     return water;
// };

/**
    key idea: mainain two pointer of max left & right 

    maxLeft: 0;
    maxRight: 1;

    [0,1,0,2,1,0,1,3,2,1,2,1]
     L                     R
    
    ->
 */
function trap(height: number[]): number {
    let left = 0;
    let right = height.length - 1;

    let maxLeft = height[left];
    let maxRight = height[right];

    let water = 0;
    
    while(left < right){
        if(maxLeft <= maxRight){
            left++;
            water += maxLeft - height[left] > 0 ? maxLeft - height[left] : 0;
            maxLeft = Math.max(maxLeft, height[left]);
        } else {
            right--;
            water += maxRight - height[right] > 0 ? maxRight - height[right] : 0;
            maxRight = Math.max(maxRight, height[right]);
        }
    }

    return water;
}


























