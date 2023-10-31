let s = "loveleetcode",
  c = "e";

let shortestToChar = function (s, c) {
  let prev = s.indexOf(c);
  let next = prev;
  let arr = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] == c) {
      prev = i;
      next = s.indexOf(c, prev + 1);
    }
    arr.push(Math.min(Math.abs(prev - i), Math.abs(next - i)));
  }
  return arr;
};

console.log(shortestToChar(s, c));
