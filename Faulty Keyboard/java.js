let s = "string";

let finalString = function (s) {
  let x = [];
  for (let str of s) {
    if (str == "i") {
      x.reverse();
    } else {
      x.push(str);
    }
  }
  return x.join("");
};

console.log(finalString(s));
