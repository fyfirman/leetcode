function validMountainArray(arr: number[]): boolean {
    if(arr.length < 3){
        return false;
    }

    let isIncreasing = true;

    for(let i=1; i < arr.length; i++){
        if(arr[i-1] === arr[i]){
            return false;
        }

        if(isIncreasing && arr[i-1] < arr[i]){
            continue;
        }
        
        if(isIncreasing && arr[i-1] > arr[i] && i !== 1){
            isIncreasing = false;
            continue;
        }

        if(!isIncreasing && arr[i-1] > arr[i]){
            continue;
        }

        return false
    }

    return !isIncreasing;
};