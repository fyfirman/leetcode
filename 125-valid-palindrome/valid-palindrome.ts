function isPalindrome(s: string): boolean {
    const transformed = s.toLowerCase().replace(/[^0-9a-z]/gi, '')
    console.log(transformed)
    for(let i=0; i < transformed.length - 1; i++){
        if(transformed[i] !== transformed[transformed.length-1 - i]){
            return false
        }
    }

    return true
};