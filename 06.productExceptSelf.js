// nums = [1, 2, 3, 4]
// leftArray = [1, 1, 2, 6]
// rightArray = [24, 12, 4, 1]
// solution = [24, 12, 8, 6]

const productExceptSelf = (nums) => {
  const leftArray = [];
  const rightArray = [];
  const solution = [];

  for (let i = 0; i < nums.length; i++) {
    if (leftArray.length === 0) leftArray.push(1);
    else leftArray.push(leftArray[i - 1] * nums[i - 1]);
  }

  for (let i = nums.length - 1; i > -1; i--) {
    if (rightArray.length === 0) rightArray.push(1);
    else rightArray.unshift(rightArray[0] * nums[i + 1]);
  }

  for (let i = 0; i < leftArray.length; i++) {
    solution.push(leftArray[i] * rightArray[i]);
  }

  return solution;
};

const input = [1, 2, 3, 4];
console.log(productExceptSelf(input));
