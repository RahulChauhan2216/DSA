let paths = [
  ["qMTSlfgZlC", "ePvzZaqLXj"],
  ["xKhZXfuBeC", "TtnllZpKKg"],
  ["ePvzZaqLXj", "sxrvXFcqgG"],
  ["sxrvXFcqgG", "xKhZXfuBeC"],
  ["TtnllZpKKg", "OAxMijOZgW"],
];

let destCity = function (paths) {
  let x = paths[0][1];

  for (let i = 1; i < paths.length; i++) {
    for (let j = 1; j < paths.length; j++) {
      if (x == paths[j][0]) {
        x = paths[j][1];
      }
    }
  }
  return x;
};

console.log(destCity(paths));
