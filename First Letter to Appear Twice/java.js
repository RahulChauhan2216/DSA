let s = "jkodgypoya";

let repeatedCharacter = function (s) {
  let set = new Set();

  for (let i = 0; i < s.length; i++) {
    if (set.has(s[i])) {
      return s[i];
    } else {
      set.add(s[i]);
    }
  }
};

console.log(repeatedCharacter(s));