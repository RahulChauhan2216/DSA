let nums = [3, 2, 3, 4, 2];

var distinctDifferenceArray = function (nums) {
  let set = new Set();
  let arr = [];

  for (let num of nums) {
    set.add(num);
    arr.push(set.size);
  }
  set.clear();
  for (let i = nums.length - 1; i >= 0; i--) {
    arr[i] = arr[i] - set.size;
    set.add(nums[i]);
  }
  return arr;
};

console.log(distinctDifferenceArray(nums));
