let s = "anagram",
  t = "nagaram";

let isAnagram = function (s, t) {
  let x = s.split("").sort().join("");
  let y = t.split("").sort().join("");

  return x == y;
};

console.log(isAnagram(s, t));
