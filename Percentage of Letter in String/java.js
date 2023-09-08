let s = "sgawtb",
  letter = "s";

let percentageLetter = function (s, letter) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == letter) {
      count++;
    }
  }
  if (count != 0) {
    let x = Math.floor((count / s.length) * 100);
    return x;
  } else {
    return 0;
  }
};

console.log(percentageLetter(s, letter));
