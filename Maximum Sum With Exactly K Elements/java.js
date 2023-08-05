let nums = [1, 2, 3, 4, 5],
  k = 3;

let maximizeSum = function (nums, k) {
  let x = 0;
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
  }

  if (k == 0) {
    return max;
  }

  for (let j = 0; j < k; j++) {
    x += max + j;
  }

  return x;
};

console.log(maximizeSum(nums, k));
