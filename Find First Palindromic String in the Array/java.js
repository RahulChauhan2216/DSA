let words = ["def", "ghi"];

let firstPalindrome = function (words) {
  let str1 = "";
  let str2 = "";
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length / 2; j++) {
      str1 += words[i][j];
      str2 += words[i][words[i].length - j - 1];
    }
    if (str1 == str2) {
      count++;
      return words[i];
    } else {
      str1 = "";
      str2 = "";
    }
  }

  if (count == 0) {
    return "";
  }
};

console.log(firstPalindrome(words));
