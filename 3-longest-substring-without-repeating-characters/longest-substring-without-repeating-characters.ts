/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const existSet = new Set();
    let longestCount = 0;
    let currentCount = 0;
    let firstPos = 0;

    for(let i=0; i < s.length; i++){
        if(!existSet.has(s[i])){
            existSet.add(s[i])
            longestCount = Math.max(longestCount, i - firstPos + 1)
            continue;            
        }

        if(s[firstPos] === s[i]){
            firstPos++;
            continue;
        }

        for(let j=firstPos; j < i; j++){
            if(s[i] !== s[j]){
                existSet.delete(s[j]);
                continue;
            }

            firstPos = j+1;
            break;
        }
    }

    

    return longestCount !== 0 ? longestCount : currentCount;
};