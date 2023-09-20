let text = "leet code",
  brokenLetters = "lt";

let canBeTypedWords = function (text, brokenLetters) {
  let count = 0;
  let x = text.split(" ");
  let y = brokenLetters.split("");

  for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < y.length; j++) {
      if (x[i].includes(y[j])) {
        count++;
        break;
      }
    }
  }

  return x.length - count;
};

console.log(canBeTypedWords(text, brokenLetters));
