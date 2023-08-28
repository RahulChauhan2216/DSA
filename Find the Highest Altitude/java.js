let gain = [-5, 1, 5, 0, -7];

let largestAltitude = () => {
  let total = 0;
  let biggest = 0;

  for (let i = 0; i < gain.length; i++) {
    total += gain[i];
    if (total > biggest) {
      biggest = total;
    }
  }
  return biggest;
};

console.log(largestAltitude(gain));
