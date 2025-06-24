const twoSum = (nums, target) => {
  for (const num of nums) {
    const complement = target - num;
    if (nums.includes(complement)) {
      return [nums.indexOf(num), nums.indexOf(complement)];
    }
  }
};

// console.log(twoSum([2, 7, 11, 15], 9));

const twoSumStorage = (nums, target) => {
  const storage = {};
  for (const index in nums) {
    if (storage[nums[index]] !== undefined)
      return [storage[nums[index]], index];
    storage[target - nums[index]] = index;
  }
};

// console.log(twoSumStorage([2, 7, 11, 15], 9));
