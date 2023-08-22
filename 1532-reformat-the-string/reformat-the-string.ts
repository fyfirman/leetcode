/**
 * @param {string} s
 * @return {string}
 */
var reformat = function(s) {
  const nums = [];
  const letters = []; 
  s.split("").forEach((c) => {
    if(!isNaN(c)){
      nums.push(c);
    } else {
      letters.push(c);
    }
  });
  console.log(nums, letters)

  if(Math.abs(nums.length-letters.length) > 1){
    return ""
  }

  let str = "";
  for(let i=0; i < Math.max(nums.length, letters.length); i++){
    if(nums.length > letters.length) {
      str += nums[i] + (letters?.[i] ?? "")
    } else {
      str += letters[i] + (nums?.[i] ?? "")
    }
  }
  return str
};