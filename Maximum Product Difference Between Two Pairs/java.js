let nums = [5, 6, 2, 7, 4];

function prodiff(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] < nums[j]) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      }
    }
  }

  let x = [nums[0] * nums[1]] - [nums[nums.length - 1] * nums[nums.length - 2]];

  return x;
}

console.log(prodiff(nums));
