let nums = [12, 345, 2, 6, 7896];

var findNumbers = function (nums) {
  let count = 0;
  let x = nums.toString().split(",");
  for (let i = 0; i < x.length; i++) {
    if (x[i].split("").length % 2 == 0) {
      count++;
    }
  }
  return count;
};

console.log(findNumbers(nums));
