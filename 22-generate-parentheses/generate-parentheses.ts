/**

n = 2

1. (())
2. ()()

n = 3 -> 1
1. ((())) 
n = 2 -> 2
3. (())()
2. (()())
n = 1 -> 2
4. ()(())
5. ()()()

n = 4 -> 1
0. (((())))
g(3) + g(1)
1. ((()))()
3. (())()()
2. (()())()
4. ()(())()
5. ()()()()
g(2) + g(2)
6. ()()(())
7. ()()()()
8. (())(())
9. (())()()
g(1) + g(3)
10. ()((()))
11. ()(())()
12. ()(()())
13. ()()(())
14. ()()()()

() + generateParenthesis(n-1) 
generateParenthesis(n-1) + ()
( + generateParenthesis(n-1) + )

 */

function generateParenthesis(n: number): string[] {
    if(n == 1){
        return ["()"]
    }

    const result = [];

    for(let i=1; i < n; i++){ // 4

        generateParenthesis(n-i).forEach((startParenthesis) => {
            if(i === 1){
                result.push(`(${startParenthesis})`);
            }

            generateParenthesis(i).forEach((endParenthesis) => {
                result.push(`${startParenthesis}${endParenthesis}`);
            })
        });
    }

    
    return [...new Set(result)];
};