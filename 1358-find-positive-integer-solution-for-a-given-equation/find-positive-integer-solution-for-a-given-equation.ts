/**
 * // This is the CustomFunction's API interface.
 * // You should not implement it, or speculate about its implementation
 * class CustomFunction {
 *      f(x: number, y: number): number {}
 * }
 */

function findSolution(customfunction: CustomFunction, z: number): number[][] {
    const result = [];
    for(let i=1; i <= z; i++){
        for(let j=1; j<=z; j++){
            if(customfunction.f(i,j) === z){
                result.push([i, j]);
            }
        }
    }
    return result;
};