let seats = [3, 1, 5],
  students = [2, 7, 4];

let minMovesToSeat = function (seats, students) {
  let x = seats.sort((a, b) => a - b);
  let y = students.sort((a, b) => a - b);
  let sum = 0;

  for (let i = 0; i < x.length; i++) {
    if (x[i] == y[i]) {
      continue;
    } else if (x[i] > y[i]) {
      sum += x[i] - y[i];
    } else {
      sum += y[i] - x[i];
    }
  }
  return sum;
};

console.log(minMovesToSeat(seats, students));
