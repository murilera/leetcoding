const maxProfit = (prices) => {
  let minPrice = prices[0];
  let maxProfit = 0;
  let index = 1;

  for (const [index, price] of prices.entries()) {
    if (index === 0) continue;

    const profit = price - minPrice;

    if (profit > maxProfit) {
      maxProfit = profit;
    }

    if (price < minPrice) {
      minPrice = price;
    }
  }

  return maxProfit;
};

// time = O(n)
// space = O(1)

const input = [7, 1, 5, 3, 6, 4];
const inputTwo = [1, 5, 3, 6, 4, 7];
const inputThree = [7, 6, 4, 3, 1];
console.log(maxProfit(input)); // 5
console.log(maxProfit(inputTwo)); // 6
console.log(maxProfit(inputThree)); // 0
