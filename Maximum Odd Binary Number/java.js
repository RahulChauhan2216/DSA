let s = "010";

var maximumOddBinaryNumber = function (s) {
  let x = s.split("").sort().reverse();
  let temp = "";
  for (let i = 0; i < x.length; i++) {
    if (x[i] !== x[i + 1]) {
      x[i] = 0;
      x[x.length - 1] = 1;
    }
  }
  return x.toString().split(",").join("");
};

console.log(maximumOddBinaryNumber(s));
