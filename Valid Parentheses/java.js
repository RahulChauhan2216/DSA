let s = "((";

let isValid = function (s) {
  let arr = [];
  if (s.length < 2) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "{" || s[i] == "[" || s[i] == "(") {
      arr.push(s[i]);
    } else {
      let back = arr.pop();
      if (s[i] == "}" && back != "{") {
        return false;
      }
      if (s[i] == ")" && back != "(") {
        return false;
      }
      if (s[i] == "]" && back != "[") {
        return false;
      }
    }
  }
  let x = arr.length == 0 ? true : false;
  return x;
};

console.log(isValid(s));
