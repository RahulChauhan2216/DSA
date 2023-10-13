let s = "   fly me   to   the moon  ";

let lengthOfLastWord = function (s) {
  let x = s.trim();
  let count = 0;
  for (let i = x.length - 1; i >= 0; i--) {
    if (x[i] !== " ") {
      count++;
    } else {
      break;
    }
  }
  return count;
};

console.log(lengthOfLastWord(s));
