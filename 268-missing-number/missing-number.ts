function missingNumber(nums: number[]): number {
  const sortedNums = nums.sort((a, b) => a - b);

  for(let i=0; i < sortedNums.length; i++){
    if(i !== sortedNums[i]){
      return i;
    }
  }

  return nums.length;
};