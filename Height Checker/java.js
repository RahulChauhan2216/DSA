let heights = [10,6,6,10,10,9,8,8,3,3,8,2,1,5,1,9,5,2,7,4,7,7];

let heightChecker = function (heights) {
  let count = 0;
  let short = [...heights];
  short.sort((a, b) => a - b);

  for (let i = 0; i < heights.length; i++) {
    if (heights[i] != short[i]) {
      count++;
    }
  }
  return count;
};

console.log(heightChecker(heights));
