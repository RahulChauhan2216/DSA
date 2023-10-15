let arr = ["aaa", "aa", "a"], k = 1;

let kthDistinct = function (arr, k) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] == undefined) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]] += 1;
    }
  }

  for (let key in obj) {
    if (obj[key] > 1) {
      delete obj[key];
    }
  }

  let x = Object.keys(obj);
  if (x[k - 1] == undefined) {
    return "";
  } else {
    return x[k - 1];
  }
};

console.log(kthDistinct(arr, k));
