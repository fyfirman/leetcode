/**
 * tokens = ["2","1","+","3","*"]
 2 
 1
 + => token. 2+1 => stored to temp
 3
 * => token. temp (3) * 3 = 9 => stored to temp
 */

 /**
    ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]

Eval RPN 1
10
6
9
3
+ => token. 9 + 3 = 12 stored to temp
-11
* => token. 12 * -11 = -121 stored to temp
/ => token. 6 / -121 = 0. stored to temp

Eval RPN 2
const stack = [10, 6, 9, 3];

10
6
9
3
+ => last two stack would be calculated.
    [stack.length - 2] (token) [stack.length - 1]
    9 + 3
    result (12). push to stack

const stack = [10,6,12,-11]
-11
* => 12 * -11
  => -121
  ...

  */

function operate(token: string, num1: number, num2: number): number{
    switch(token){
        case "*":
            return num1 * num2;
        case "/":
            return Math.trunc(num1 / num2);
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
    }
}

function evalRPN(tokens: string[]): number {
    const stack: number[] = [];

    for(let i=0; i < tokens.length; i++){
        const parsedToken = parseInt(tokens[i], 10);
        
        // If tokens is an operator
        if(isNaN(parsedToken)){
            const num2 = stack.pop();
            const num1 = stack.pop();
            const result = operate(tokens[i], num1, num2);
            console.log(`${num1}${tokens[i]}${num2}=${result}`)
            stack.push(result);
            continue;
        }

        stack.push(parsedToken);
    }

    return stack[0];
};