/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let condition = true;
    const arrayOfInteger = x.toString().split('');
    arrayOfInteger.forEach((value, index)=> {
        if(value !== arrayOfInteger[arrayOfInteger.length - index - 1]){
            condition = false;
        }
    });
    return condition;
};