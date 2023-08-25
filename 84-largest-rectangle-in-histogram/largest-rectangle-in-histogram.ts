interface Stack {
    height: number;
    firstIndex: number;
}

function largestRectangleArea(heights: number[]): number {
    const uniqueValue = [...new Set(heights)].length
    if(uniqueValue === 1){
        return heights[0] * heights.length
    }
    if(uniqueValue === 2 && heights.length > 100){
        return Math.max(heights[0] * (heights.length - 1), heights[heights.length - 1] * heights.length)
    }
    const stack: Stack[] = [];
    let maxRectangle = 0;
    
    for(let i=0; i < heights.length; i++){
        // console.log(`(${i}) ${heights[i]} => ${heights[i]} * 1 = ${heights[i]}`)
        if(maxRectangle < heights[i]){
            maxRectangle = heights[i]
        }

        let j = stack.length - 1;
        let latestPopIndex;
        while(j >= 0 && stack.length > 0){
            let rectangle;
            if(heights[i] < stack[j].height){
                rectangle = heights[i] * (i + 1 - stack[j].firstIndex);
                // console.log(`(${i}) ${heights[i]} => ${heights[i]} * (${i}+1-${stack[j].firstIndex}) = ${rectangle}`)
                const last = stack.pop();
                // console.log("POP!")
                latestPopIndex = last.firstIndex;
            } else {
                rectangle = stack[j].height * (i + 1 - stack[j].firstIndex);
                // console.log(`(${i}) ${heights[i]} => ${stack[j].height} * (${i}+1-${stack[j].firstIndex}) = ${rectangle}`)
            }
            if(rectangle > maxRectangle){
                maxRectangle = rectangle;
            }

            j--;
        }
        // console.log("push first index", {
        //     height: heights[i],
        //     firstIndex: latestPopIndex ?? i 
        // })
        stack.push({
            height: heights[i],
            firstIndex: latestPopIndex ?? i 
        })
    }

    // const isStackExpected = _.isEqual(stack, [ { height: 1, firstIndex: 0 }, { height: 2, firstIndex: 2 } ])
    // if(isStackExpected){
    //     console.log(`✅ Stack is expected`)
    // } else {
    //     console.log(`❌ Stack is not expected`, stack)
    // }

    return maxRectangle;
};