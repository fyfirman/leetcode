function isCovered(intervalA: number[], intervalB: number[]): boolean {
    const a = intervalA[0];
    const b = intervalA[1];
    const c = intervalB[0];
    const d = intervalB[1];
    
    if(c <= a && b <= d){
        return true;
    }
    return false;
}

function removeCoveredIntervals(intervals: number[][]): number {
    const temp = [...intervals];
    // loop entire intervals
    for(let i=0; i<intervals.length-1;i++){        
        for(let j=i+1; j<intervals.length; j++){
            if(intervals[i].length === 0){
                break;
            }
            if(intervals[j].length === 0){
                continue;
            }
            
            // check is covered each other
            if(isCovered(intervals[i], intervals[j])){
                // delete intervals i from temp
                temp[i] = [];
            }
            if(isCovered(intervals[j], intervals[i])){
                temp[j] = [];
            }
        }
    }
    
    // sanitize result
    let result = 0;
    for(let i=0; i<temp.length;i++){
        if(temp[i].length !== 0){
            result += 1;
        }   
    }
    
    return result;
};