/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }
  return maxProfit;
};

/**
 * PROBLEM:
 *   Given array of integers, find the max possible profit
 * from "buying" on one day and "selling" later.
 * 
 * SOLUTION:
 *   Brute force O(n^2) - use two loops to do every possible comparison
 *   Smart O(n) - Track two things: minPrice and maxProfit. First check if price is less than min, in which case you don't need to compare
 *     If more than min, do the comparison and check against maxProfit
 */