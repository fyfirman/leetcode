interface Stack {
    height: number;
    index: number;
}

function largestRectangleArea(heights: number[]): number {
    const stack: Stack[] = [];
    let maxArea = 0;
    
    for(let i=0; i < heights.length; i++){
        let latestPopIndex = i;
        while(stack.length > 0 && stack[stack.length-1].height > heights[i]){
            const { index, height } = stack.pop();
            maxArea = Math.max(maxArea, height * (i - index))
            latestPopIndex = index;
        }
        stack.push({
            height: heights[i],
            index: latestPopIndex
        })
    }

    while(stack.length > 0){
        const topStack = stack.pop()
        maxArea = Math.max(maxArea, topStack.height * (heights.length - topStack.index))
    }

    return maxArea;
};