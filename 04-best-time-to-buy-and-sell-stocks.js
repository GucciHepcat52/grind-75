function maxProfit(prices) {
  let minimum = prices[0];
  let maximumProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    minimum = Math.min(minimum, prices[i]);
    maximumProfit = Math.max(maximumProfit, prices[i] - minimum);
  }
  return maximumProfit;
}

maxProfit([14, 58, 20, 77, 66, 82, 42, 67, 42, 4]);
