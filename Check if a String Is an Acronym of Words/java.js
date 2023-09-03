let words = ["dvn", "acafe"],
  s = "dp";

let isAcronym = function (words, s) {
  if (words.length != s.length) {
    return false;
  }
  for (let i = 0; i < words.length; i++) {
    if (words[i][0] != s[i]) {
      return false;
    }
  }
  return true;
};

console.log(isAcronym(words, s));
