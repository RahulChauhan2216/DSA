let nums = [1, 3, 5, 4, 7];

var findLengthOfLCIS = function (nums) {
  let max = 0,
    count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < nums[i + 1]) {
      count++;
      max = Math.max(max, count);
    } else {
      count = 0;
    }
  }
  return max > 0 ? max + 1 : 1;
};

console.log(findLengthOfLCIS(nums));
