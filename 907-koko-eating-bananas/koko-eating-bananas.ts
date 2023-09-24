/**
  Key idea: bruteforce + binary search for optimization

    piles = [3,6,7,11], h = 8           total = Math.round(27 / 8) = 4
            11 + 7 + 6 = 24


    piles = [30,11,23,4,20], h = 5      total = Math.round(88 / 5) = 18
            4,11,20,23,30
        
            hour left = 5 - 3 = 2
            20,23,30

    piles = [30,11,23,4,20], h = 6      total = Math.round(88 / 6) = 15
            4,11,20,23,30 
    
            hour left = 6 - 3 = 3
            20,23,30 => total 63/3 = 21

            hour left = 3-1 = 2
            23,30 => total 43/2 = 22

                        [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
                                               8
 */

function minEatingSpeed(piles: number[], h: number): number {
    if(piles.length === h){
      return Math.max(...piles);
    }

    let left = 1, right = Math.max(...piles);
    let result = right;
  
    while(left <= right){
      const mid = Math.floor((left + right) / 2);
      
      const totalHours = piles.reduce((prev, curr) => prev + Math.ceil(curr/mid), 0);

      if(totalHours > h){
        left = mid + 1;
      } else {
        right = mid - 1;
        result = Math.min(result, mid);
      }
    }

    return result;
};