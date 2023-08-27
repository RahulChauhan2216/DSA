let nums = [2, 7, 1, 19, 18, 3];

let sumOfSquares = function (nums) {
  let x = nums[0] * nums[0] + nums[nums.length - 1] * nums[nums.length - 1];
  if (nums.length < 2) {
    return nums[0] * nums[0];
  }
  if (nums.length < 3) {
    return x;
  }
  for (let i = 2; i < nums.length - 1; i++) {
    if (nums.length % i == 0) {
      x += nums[i - 1] * nums[i - 1];
    }
  }
  return x;
};

console.log(sumOfSquares(nums));
