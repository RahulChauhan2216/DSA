let s = "ababa";

let removePalindromeSub = function (s) {
  return s.split("").reverse().join("") == s ? 1 : 2;
};

console.log(removePalindromeSub(s));
