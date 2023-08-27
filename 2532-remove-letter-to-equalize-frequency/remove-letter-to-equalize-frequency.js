/**
    key idea: brute force
 
 * @param {string} word
 * @return {boolean}
 */
var equalFrequency = function(word) {
    const obj = {};
    word.split('').forEach((c) => {
        if(!obj[c]){
            Object.assign(obj, {[c]: 1})
            return;
        }

        obj[c] += 1;
    });

    const uniqueCount = {};
    Object.values(obj).forEach((c) => {
        if(!uniqueCount[c]){
            Object.assign(uniqueCount, {[c]: 1})
            return;
        }
        uniqueCount[c] += 1;
    });

    if(Object.keys(uniqueCount).length > 2){
        return false;
    }

    if(Object.keys(uniqueCount).length === 1){
        return Object.keys(uniqueCount)[0] === '1' || Object.values(uniqueCount)[0] === 1;
    }

    // unique count === 2
    if(Object.values(uniqueCount)[0] !== 1 && Object.values(uniqueCount)[1] !== 1){
        return false;
    }

    if(Object.keys(uniqueCount)[0] === '1'){
        if(Object.keys(uniqueCount)[1] > 2 && Object.values(uniqueCount)[0] !== 1){
            return false;
        }
        return true;
    }

    if(
        Object.values(uniqueCount)[1] === 1 &&
        Object.keys(uniqueCount)[1] - Object.keys(uniqueCount)[0] === 1
    ){
        return true
    }
    
    return false;
};