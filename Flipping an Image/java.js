let image = [
  [1, 1, 0],
  [1, 0, 1],
  [0, 0, 0],
];

let arr = [];
let arr1 = [];
let x = "";

for (let i = 0; i < image.length; i++) {
  for (let j = image[i].length - 1; j >= 0; j--) {
    x += image[i][j];
  }
  arr.push(x);
  x = "";
}

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[i][j] == "0") {
      x += "1";
    }
    if (arr[i][j] == "1") {
      x += "0";
    }
  }
  let y = x.split("");
  arr1.push(y);
  x = "";
}

arr = [];

for (let i = 0; i < arr1.length; i++) {
  let z = arr1[i].map(Number);
  arr.push(z);
}

return arr;

