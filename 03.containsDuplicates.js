const containsDuplicates = (nums) => {
  const storage = {};
  for (const num of nums) {
    if (storage[num] !== undefined) return true;
    storage[num] = num;
  }
  return false;
};
// time = O(n)
// space = O(n)

const containsDuplicatesBetter = (nums) => {
  nums.sort((a, b) => a - b); // O(log n)

  for (let i = 1; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) return true;
  }

  return false;
};
// time = O(n log n)
// space = O(1)

const input = [1, 2, 4, 3];
// console.log(containsDuplicates(input));
console.log(containsDuplicatesBetter(input));
