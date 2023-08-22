const matchedBracket = {
    ")": "(",
    "]": "[",
    "}": "{",
}

const openerBrackets = ["(", "[", "{"];

function isValid(s: string): boolean {
    const brackets = s.split('');
    const stack = [];
    let result = true;
    
    // loop entire brackets
    for(let i=0; i < brackets.length; i++){
		// check is current bracket is opener bracket
        if(openerBrackets.includes(brackets[i])){
            stack.push(brackets[i]);
        } else{
            // check if latest stack is match with current bracket
            if(stack[stack.length - 1] === matchedBracket[brackets[i]]){
                // pop matched bracket
                stack.pop();
            } 
            // else: wrong condition, break and return false 
            else{
                result = false;
                break;
            }
        }    
    }
    if(stack.length !== 0){
        return false;   
    }
    return result;
};