let words = ["a", "b", "c", "ab", "bc", "abc"],
  s = "abc";

let countPrefixes = function (words, s) {
  let count = 0;
  for (let word of words) {
    if (s.startsWith(word)) {
      count++;
    }
  }
  return count;
};

console.log(countPrefixes(words, s));
