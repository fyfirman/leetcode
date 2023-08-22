/**
 * @param {string} s
 * @return {boolean}
 */
var isNiceString = function(s){
    const obj = {};

    s.split('').forEach((c) => {
        const binaryChar = c.charCodeAt().toString(2).padStart(7, '0'); // a 01100001
        const reversedBinary = parseInt(binaryChar, 2) ^ parseInt("00100000", 2);
        const reversedCaseChar = String.fromCharCode(reversedBinary);

        if(obj[c] === undefined && obj[reversedCaseChar] === undefined){
            Object.assign(obj, {[c]: false});
            return;
        }

        if(obj[reversedCaseChar] === false){
            obj[reversedCaseChar] = true;
            return;
        }
    });

    return Object.values(obj).reduce((acc, curr) => acc && curr, true);
};


/**
 * @param {string} s
 * @return {string}
 */
var longestNiceSubstring = function(s) {
    for(let i=s.length; i > 0; i--){
        for(let j=0; j <= s.length - i; j++){
            const substring = s.slice(j, i + j);
            if(isNiceString(substring)){
                return substring;
            }
        }
    }

    return "";
}