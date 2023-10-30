let prices = [8, 4, 6, 2, 3];

let finalPrices = function (prices) {
  let answer = [];
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] <= prices[i]) {
        prices[i] = prices[i] - prices[j];
        break;
      }
    }
    answer.push(prices[i]);
  }
  return answer;
};

console.log(finalPrices(prices));
