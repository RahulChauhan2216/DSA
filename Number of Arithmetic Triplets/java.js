let nums = [0, 1, 4, 6, 7, 10],
  diff = 3;

let arithmeticTriplets = function (nums, diff) {
  let count = 0;

  for (let i = nums.length - 1; i >= 0; i--) {
    for (let j = i - 2; j > i - 3; j--) {
      if (nums[i] - nums[j] == diff) {
        count++;
      }
    }
  }

  return count;
};

console.log(arithmeticTriplets(nums, diff));
