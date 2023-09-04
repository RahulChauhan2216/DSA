let allowed = "abc",
  words = ["a", "b", "c", "ab", "ac", "bc", "abc"];

let countConsistentStrings = function (allowed, words) {
  let count = 0;
  for (let item of words) {
    if (item.split("").every((word) => allowed.includes(word))) {
      count++;
    }
  }
    return count;
};

countConsistentStrings(allowed, words);
