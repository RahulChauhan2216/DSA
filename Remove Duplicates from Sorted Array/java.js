let nums = [1, 1, 2];

let removeDuplicates = function (nums) {
  let x = [...new Set(nums)];
  nums.splice(0, 0, ...x);
  return x.length;
};

console.log(removeDuplicates(nums));
