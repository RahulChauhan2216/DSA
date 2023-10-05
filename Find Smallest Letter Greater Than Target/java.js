let letters = ["x", "x", "y", "y"],
  target = "z";

var nextGreatestLetter = function (letters, target) {
  let set = new Set(letters);
  for (let x of set) {
    if (x > target) return x;
  }
  return letters[0];
};

console.log(nextGreatestLetter(letters, target));
