const maxSubArray = (nums) => {
  let currentSum = nums[0];
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (currentSum + nums[i] > nums[i]) {
      currentSum = currentSum + nums[i];
    } else {
      currentSum = nums[i];
    }

    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }

  return maxSum;
};

//time = O(n)
//space = O(1)

const maxSubArrayBetter = (nums) => {
  let currentSum = nums[0];
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
};

//time = O(n)
//space = O(1)

const input = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(input));
