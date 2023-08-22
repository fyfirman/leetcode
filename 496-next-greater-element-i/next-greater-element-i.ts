/**
    key idea: decreasing monotonic stack and find in another array \U0001f914
 */

function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    /**
     * Decreasing monotonic stack -- O(nums2.length)
     */
    const result = Array(nums2.length).fill(-1);
    const stack = [];

    for(let i = nums2.length - 1; i >= 0; i--){
        while(stack.length > 0){
            const topStack = stack[stack.length - 1];
            if(topStack > nums2[i]){
                result[i] = topStack;
                break;
            }

            stack.pop();
        }

        stack.push(nums2[i])
    }

    /**
     * Find the underlined in nums2
     */
    const answers = [];
    for(const num of nums1){
        const index = nums2.indexOf(num);
        answers.push(result[index])
    }

    return answers;
};