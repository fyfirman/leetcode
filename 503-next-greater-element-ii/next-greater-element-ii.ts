/**
 * Key idea: decreasing monotonic stack, but start from the max index to the left
 * 
 * Another idea to achieve circular loop is having double loop (https://www.youtube.com/watch?v=ARkl69eBzhY)
 * 
 */

function nextGreaterElements(nums: number[]): number[] {
    const max = Math.max(...nums);
    const maxIndex = nums.indexOf(max);
    const stack = [max];
    const answer = [];

    let i = maxIndex !== 0 ? maxIndex-1 : nums.length - 1;
    answer[maxIndex] = -1;
    while(i !== maxIndex){
        while(stack.length !== 0){
            if(stack[stack.length - 1] > nums[i]){
                answer[i] = stack[stack.length-1];
                stack.push(nums[i]);
                break;
            }

            stack.pop();
        }

        if(stack.length === 0){
            answer[i] = -1;
        }
        stack.push(nums[i]);

        if(i === 0){
            i = nums.length - 1;
            continue;
        }
        i--;
    }

    return answer;
};