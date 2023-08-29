let nums = [0, 1, 4, 6, 7, 10],
  diff = 3;

let arithmeticTriplets = function (nums, diff) {
  let count = 0;
  if (nums.length < 3) {
    return count;
  }
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[k] - nums[j] == diff && nums[j] - nums[i] == diff) {
          count++;
        }
      }
    }
  }
  return count;
};

console.log(arithmeticTriplets(nums, diff));
