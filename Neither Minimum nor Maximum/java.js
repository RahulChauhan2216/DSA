let nums = [3, 30, 24];

let findNonMinOrMax = function (nums) {
  let temp = nums[0];
  let temp1 = nums[0];

  if (nums.length == 1 || nums.length == 2) {
    return -1;
  }

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > temp) {
      temp = nums[i];
    }
  }
  // console.log(temp);

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < temp1) {
      temp1 = nums[i];
    }
  }
  // console.log(temp1);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== temp && nums[i] !== temp1) {
      return nums[i];
    }
  }
};

console.log(findNonMinOrMax(nums));
