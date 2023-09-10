let firstWord = "aaa",
  secondWord = "a",
  targetWord = "aab";

let isSumEqual = function (firstWord, secondWord, targetWord) {
  let obj = {};
  let alpha = "abcdefghij";
  let value = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let x = "";
  let y = "";
  let z = "";

  for (let i = 0; i < alpha.length; i++) {
    if (obj[alpha[i]] == undefined) {
      obj[alpha[i]] = value[i];
    }
  }

  for (let key of firstWord) {
    x += obj[key];
  }

  for (let key of secondWord) {
    y += obj[key];
  }

  for (let key of targetWord) {
    z += obj[key];
  }

  return parseInt(x) + parseInt(y) == parseInt(z);
};

console.log(isSumEqual(firstWord, secondWord, targetWord));
