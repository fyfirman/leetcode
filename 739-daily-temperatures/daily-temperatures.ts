/**
    key idea: use decreasing monotonic stack. store value and index to the stack.
 */
function dailyTemperatures(temperatures: number[]): number[] {
    const stack: { temperature: number; index: number}[] = [];
    const answers = Array(temperatures.length).fill(0);

    for(let i=temperatures.length - 1; i >= 0; i--){
        while(stack.length !== 0){
            if(temperatures[i] < stack[stack.length - 1].temperature){
                answers[i] = stack[stack.length - 1].index - i;
                break;
            }

            stack.pop();
        }

        stack.push({ temperature: temperatures[i], index: i })
    }

    return answers;
};

