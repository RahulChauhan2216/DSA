let s = "abbaca";

var removeDuplicates = function (s) {
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    if (arr[arr.length - 1] == s[i]) {
      arr.pop();
    } else arr.push(s[i]);
  }
  return arr.join("");
};

console.log(removeDuplicates(s));
