let x = 1000021;

let isPalindrome = function (x) {
  let y = x.toString().split("").reverse().join("");
  return x == y;
};

console.log(isPalindrome(x));
