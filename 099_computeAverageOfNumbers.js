function computeAverageOfNumbers(nums) {
  return nums.length > 0 ? nums.reduce((a, b) => a + b) / nums.length : 0;
}
