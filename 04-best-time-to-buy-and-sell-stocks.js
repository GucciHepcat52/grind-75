/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxResult = 0;

  // brute force O(n^2)
  // for (let i = 0; i < prices.length; i++) {
  //     for (let j = i+1; j < prices.length; j++) {
  //         if (prices[j] - prices[i] > maxResult) {
  //             maxResult = prices[j] - prices[i];
  //         }
  //     }
  // }

  // O(n)
  // mini - 1
  // max - 5

  // 2,500,1,80,3,400,5
  let minimum = prices[0];
  for (let i = 0; i < prices.length; i++) {
    minimum = Math.min(minimum, prices[i]);
    maxResult = Math.max(maxResult, prices[i] - minimum);
  }
  return maxResult;
};
