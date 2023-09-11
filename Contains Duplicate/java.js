let nums = [1, 2, 3, 1];

let containsDuplicate = function (nums) {
  let x = new Set(nums);
  return x.size !== nums.length;
};

console.log(containsDuplicate(nums));
