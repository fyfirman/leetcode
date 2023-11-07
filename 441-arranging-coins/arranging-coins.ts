function arrangeCoins(n: number): number {
    let curr = n;
    for(let i=1; i < n; i++){
      if(curr === i){
        return i;
      }
      
      if(curr < i){
        return i-1;
      }

      curr -= i;
    }

    return 1;
};