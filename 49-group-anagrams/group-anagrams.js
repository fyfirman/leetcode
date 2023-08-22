/**
 *
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    if(strs.length <= 1){
        return [strs];
    }

    const map = new Map();
    for(let i=0; i < strs.length; i++){  
        const sortedString = strs[i].split('').sort().join('');

        if(map.has(sortedString)){
            map.set(sortedString, [...map.get(sortedString), strs[i]])
        } else {
            map.set(sortedString, [strs[i]])
        }
    }

    return Array.from(map, ([name, value]) => value);
};