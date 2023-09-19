let rings = "B0R0G0R9R0B0G0";

let countPoints = function (rings) {
  let rods = "0123456789";
  let count = 0;

  for (let x of rods) {
    if (
      rings.includes(`R${x}`) &&
      rings.includes(`G${x}`) &&
      rings.includes(`B${x}`)
    ) {
      count++;
    }
  }
  return count;
};

console.log(countPoints(rings));
