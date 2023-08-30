let s = "cbdabc";

let minimizedStringLength = function (s) {
  let count = 0;
  let obj = {};

  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]] == undefined) {
      obj[s[i]] = 1;
    }
  }

  for (let key in obj) {
    count++;
  }

  return count;
};

console.log(minimizedStringLength(s));
