let s = "rR";

let greatestLetter = function (s) {
  let x = s.split("").sort().reverse();
  for (let i = 0; i < x.length; i++) {
    if (x[i] == x[i].toUpperCase() || x.length == 1) {
      return "";
    } else {
      if (s.includes(x[i].toUpperCase())) {
        return x[i].toUpperCase();
      }
    }
  }
};

console.log(greatestLetter(s));
