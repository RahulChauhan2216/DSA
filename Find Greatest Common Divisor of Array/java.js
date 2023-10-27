let nums = [2,3,4,5,6,7,8,9,10];

var findGCD = function (nums) {
  let x = nums.sort(function (a, b) {
    return a - b;
  });
  let d = 0;
  for (let i = 1; i <= x[0]; i++) {
    if (x[0] % i == 0 && x[x.length - 1] % i == 0) {
      d = i;
    }
  }
  return d;
};

console.log(findGCD(nums));
