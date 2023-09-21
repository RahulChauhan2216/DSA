let strs = ["alic3", "bob", "3", "4", "00000"];

let maximumValue = function (strs) {
  let ans = 0;
  for (let key of strs) {
    if (isNaN(key)) {
      ans = Math.max(key.length, ans);
    } else {
      ans = Math.max(Number(key), ans);
    }
  }
  return ans;
};

console.log(maximumValue(strs));
