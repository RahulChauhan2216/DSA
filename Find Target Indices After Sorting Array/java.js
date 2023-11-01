let nums = [1, 2, 5, 2, 3],
  target = 2;

let targetIndices = function (nums, target) {
  let arr = [];
  let x = nums.sort(function (a, b) {
    return a - b;
  });

  for (let i = 0; i < x.length; i++) {
    if (x[i] == target) {
      arr.push(i);
    }
  }
  return arr;
};

console.log(targetIndices(nums, target));
