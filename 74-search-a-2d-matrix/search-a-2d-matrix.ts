function searchMatrix(matrix: number[][], target: number): boolean {
    let left = 0, right = matrix.length - 1;

    let selectedRow;

    while(left <= right){
        let mid = Math.floor((left + right) / 2);

        if(target >= matrix[mid][0] && target <= matrix[mid][matrix[mid].length - 1]){
            selectedRow = mid;
            break;
        }

        if(target < matrix[mid][0]){
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    if(selectedRow === undefined){
        return false;
    }

    left = 0, right = matrix[selectedRow].length - 1;

    while(left <= right){
        let mid = Math.floor((left + right) / 2);

        if(target === matrix[selectedRow][mid]){
            return true;
        }

        if(target < matrix[selectedRow][mid]){
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return false;
};