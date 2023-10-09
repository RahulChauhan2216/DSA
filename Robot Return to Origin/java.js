let moves = "UD";

let judgeCircle = function (moves) {
  let x = 0,
    y = 0;
  for (let place of moves) {
    switch (place) {
      case "U":
        x++;
        break;
      case "D":
        x--;
        break;
      case "L":
        y--;
        break;
      case "R":
        y++;
        break;
    }
  }

  return x === 0 && y == 0;
};

console.log(judgeCircle(moves));
