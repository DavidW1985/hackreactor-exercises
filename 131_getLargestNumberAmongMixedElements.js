function getLargestNumberAmongMixedElements(arr) {
  let nums = arr.filter(el => typeof el === 'number');
  return nums.length > 0 ? Math.max(...nums) : 0;
}
