let s = "leetcode";

let sortString = function (s) {
  let str = "";
  let x = s.split("");
  let set = [...new Set(s)].sort();

  while (x.length > 0) {
    for (let i = 0; i < set.length; i++) {
      let index = x.indexOf(set[i]);
      if (index !== -1) {
        str += set[i];
        x.splice(index, 1);
      }
    }
    set = set.reverse();
  }
  return str;
};

console.log(sortString(s));
