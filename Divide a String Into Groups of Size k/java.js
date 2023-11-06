let s = "abcdefghi",
  k = 3,
  fill = "x";

var divideString = function (s, k, fill) {
  let arr = [];
  let temp = "";
  let len = 0;
  if (s.length % k === 0) {
    len = s.length;
  } else {
    len = s.length + k - (s.length % k);
  }
  for (let i = 0; i < len; i++) {
    temp += s[i] || fill;
    if (temp.length === k) {
      arr.push(temp);
      temp = "";
    }
  }
  return arr;
};

console.log(divideString(s, k, fill));
