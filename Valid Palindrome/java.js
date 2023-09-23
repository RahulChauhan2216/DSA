let s = "A man, a plan, a canal: Panama";

let isPalindrome = function (s) {
  let small = s.toLowerCase();
  let alphabet = "abcdefghijklmnopqrstuvwxyz0123456789";
  let x = "";

  for (let i = 0; i < small.length; i++) {
    for (let j = 0; j < alphabet.length; j++) {
      if (small[i] == alphabet[j]) {
        x += small[i];
      }
    }
  }

  let y = x.split("").reverse().join("");

  return x == y;
};

console.log(isPalindrome(s));
