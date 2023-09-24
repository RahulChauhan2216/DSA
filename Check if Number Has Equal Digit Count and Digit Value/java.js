let num = "1210";

let digitCount = function (num) {
  let count = 0;

  for (let i = 0; i < num.length; i++) {
    for (let j = 0; j < num.length; j++) {
      if (i == num[j]) {
        count++;
      }
    }
    if (num[i] != count) {
      return false;
    }
    count = 0;
  }
  return true;
};

console.log(digitCount(num));
