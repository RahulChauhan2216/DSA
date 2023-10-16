let nums = [2, 2, 1, 3];

let majorityElement = function (nums) {
  let obj = {};
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]] == undefined) {
      obj[nums[i]] = 1;
    } else {
      obj[nums[i]] += 1;
    }
  }

  for (let key in obj) {
    if (obj[key] >= nums.length / 2) return key;
  }
};

console.log(majorityElement(nums));
