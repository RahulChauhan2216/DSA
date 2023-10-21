let s = "1 box has 3 blue 4 red 6 green and 12 yellow marbles";

var areNumbersAscending = function (s) {
  let x = s.split(" ");
  let temp = 0;

  for (let i = 0; i < x.length; i++) {
    let y = +x[i];
    if (isNaN(y)) {
      continue;
    }
    if (y > temp) {
      temp = y;
    } else return false;
  }
  return true;
};

console.log(areNumbersAscending(s));
