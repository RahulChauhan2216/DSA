let words = ["rwjje", "aittjje", "auyyn", "lqtktn", "lmjwn"];

let uniqueMorseRepresentations = function (words) {
  let str = "";
  let obj = {};
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  let code = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];

  for (let i = 0; i < alpha.length; i++) {
    if (obj[alpha[i]] == undefined) {
      obj[alpha[i]] = code[i];
    }
  }

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      str += obj[words[i][j]];
    }
    words[i] = str;
    str = "";
  }

  return new Set(words).size;
};

console.log(uniqueMorseRepresentations(words));
