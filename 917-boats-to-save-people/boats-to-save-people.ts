/**
  key idea: two pointer. 
 */

function numRescueBoats(people: number[], limit: number): number {
  let left = 0, right = people.length - 1;

  const sorted = people.sort((a, b) => a-b);
  const boats = [];

  while(left <= right){
    const sum = sorted[left] + sorted[right];

    if(sum > limit){
      boats.push([sorted[right]]);
      right--;
    } else if(sum <= limit ){
      boats.push([sorted[left], sorted[right]]);
      
      left++;
      right--;

    }
  }

  return boats.length;
};