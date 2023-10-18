let s = "xyzzaz";

let countGoodSubstrings = function (s) {
  let count = 0;
  for (let i = 0; i < s.length - 2; i++) {
    let substr = s.slice(i, i + 3);
    let set = new Set(substr);
    if (set.size == 3) {
      count++;
    }
  }
  return count;
};

console.log(countGoodSubstrings(s));
