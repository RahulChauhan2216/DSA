let s = "abcabcbb";

let lengthOfLongestSubstring = function (s) {
  let start = 0;
  let end = 0;
  let maxlength = 0;

  let x = new Set();

  while (end < s.length) {
    if (!x.has(s[end])) {
      x.add(s[end]);
      end++;
      maxlength = Math.max(maxlength, x.size);
    } else {
      x.delete(s[start]);
      start++;
    }
  }

  return maxlength;
};

console.log(lengthOfLongestSubstring(s));
