const romanValue = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
}

function romanToInt(s: string): number {
    const romanArr = s.split('');
    let result = 0;
    
    for(let i=0;i<romanArr.length;i++){
        if(!!romanArr[i+1] && romanValue[romanArr[i+1]] > romanValue[romanArr[i]]){
            result += romanValue[romanArr[i+1]] - romanValue[romanArr[i]];
            i++;
        } else {
            result += romanValue[romanArr[i]];
        }
    }
    return result;
};