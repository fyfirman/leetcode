/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {

    // Check column and rows
    for(let i=0; i < 9; i++){
        let rowMap = {};
        let colMap = {};
        let subBoxMap = {};
        
        const m = i - (i % 3)
        const n = (i % 3) * 3


        for(let j=0; j < 9; j++){
            const x = Math.floor(j/3);
            const y = j % 3;
            const numSub = board[m+x][n+y];
            const numRow = board[i][j];
            const numCol = board[j][i];


            if(rowMap[numRow] || colMap[numCol] || subBoxMap[numSub]){
                return false
            }

            if(numRow !== "."){
                Object.assign(rowMap, {[numRow]: true})
            }
            if(numCol !== "."){
                Object.assign(colMap, {[numCol]: true})
            }
            if(numSub !== "."){
                Object.assign(subBoxMap, {[numSub]: true})
            }
        }

        rowMap = {};
        colMap = {};
        subBoxMap = {}
    }

    return true
};


// row & col 0-2, 3-5, 6-8
// i=0
// 0,0       0,0+1          0,0+2
// 0+1,0     0+1,0+1        0+1,0+2
// 0+2,0     0+2,0+1        0+2,0+2
//
// i=0 -> m=0,n=0    |      i=1 -> m=0,n=3    |  i=2 -> m=0,n=6
// i=3 -> m=3,n=0    |      i=4 -> m=3,n=3    |  i=5 -> m=3,n=6
// i=6 -> m=6,n=0    |      i=7 -> m=6,n=3    |  i=8 -> m=6,n=6
//
// m = i - (i mod 3)
// n = (i mod 3) * 3
//
// m+x,n+y
// x = j div 3
// y = j mod 3
// m+0,n+0       m+0,n+1        m+0,n+2
// m+1,n+0       m+1,n+1        m+1,n+2
// m+2,n+0       m+2,n+1        m+2,n+2