/**

0   4   8     12
1 3 5 7 9  11 13
2   6   10    14


0     6       12
1   5 7    11 13
2 4   8 10    14
3     9       15


 */

function convert(s: string, numRows: number): string {
  if(numRows === 1){
    return s;
  }


  const arr: Array<Array<string>> = new Array(numRows);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = []; 
  }

  let i = 0;
  let row = 0;
  let toBottom = true;
  while(i < s.length){
    arr[row].push(s[i]);

    if(row === (numRows - 1) || (!toBottom && row === 0)){
      toBottom = !toBottom
    }
    
    i++;
    row = toBottom ? row + 1 : row - 1;
  }

  return arr.map((subArray) => subArray.join('')).join('');
};