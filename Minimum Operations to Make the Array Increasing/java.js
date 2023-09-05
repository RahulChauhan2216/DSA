let nums = [1, 1, 1];

let minOperations = function (nums) {
  let count = 0;
    if (nums.length < 2) {
      return count;
    }
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= nums[i - 1]) {
      let diff = nums[i - 1] - nums[i] + 1;
      count += diff;
      nums[i] = nums[i] + diff;
    }
  }
  return count;
};

console.log(minOperations(nums));
