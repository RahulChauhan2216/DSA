let nums = [1, 3], target = 1;

var search = function (nums, target) {
  let arr = [];

  for (let i = target; i < nums.length; i++) {
    arr.push(nums[i]);
  }
  for (let i = 0; i < target; i++) {
    arr.push(nums[i]);
  }
  let x = arr.indexOf(target);
  return x;
};

console.log(search(nums, target));
