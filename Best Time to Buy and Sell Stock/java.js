let prices = [7, 6, 4, 3, 1];

let maxProfit = function (prices) {
  let profit = 0;
  let minVal = Infinity;
  for (let i = 0; i < prices.length; i++) {
    minVal = Math.min(minVal, prices[i]);
    profit = Math.max(profit, prices[i] - minVal);
  }
  return profit;
};

console.log(maxProfit(prices));
