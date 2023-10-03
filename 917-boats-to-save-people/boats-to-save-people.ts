/**


  1,2,2,3,
  l     r
  l   r

  a = 1,2
  b = 2
  c = 3
  
  limit = 3 

  1,2,2,3 => limit 5
  
  min boat = 1
  max boat = 4

  
  if left + right > limit
    rigth --
  if left + right === limit
    right --
    left ++
  if left + right < limit
    left ++

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
    } else if(sum <= limit || limit - sum < sorted[left] ){
      boats.push([sorted[left], sorted[right]]);
      
      left++;
      right--;

    }
  }

  console.log(boats)

  return boats.length;
};