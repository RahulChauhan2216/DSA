let rectangles = [
  [5, 8],
  [3, 9],
  [5, 12],
  [16, 5],
];

var countGoodRectangles = function (rectangles) {
  let arr = [];
  let count = 0;

  for (let i = 0; i < rectangles.length; i++) {
    let biggest = rectangles[i][0];
    for (let j = 1; j < rectangles[i].length; j++) {
      if (rectangles[i][j] < biggest) {
        biggest = rectangles[i][j];
        arr.push(biggest);
      } else {
        arr.push(biggest);
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[arr.length - 1]) {
      count++;
    }
  }
  return count;
};

console.log(countGoodRectangles(rectangles));
