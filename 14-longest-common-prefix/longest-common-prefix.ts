function longestCommonPrefix(strs: string[]): string {
    let resultString = "";
    for(let j=0;j<strs[0].length;j++){
        let result = true;
        for(let k=1;k<strs.length;k++){
            if(strs[0][j] !== strs[k][j]){
                result = false;
                break;
            }
        }
        if(result){
            resultString += strs[0][j]
        }else{
            break;
        }
    }
    return resultString;
};