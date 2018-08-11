function findSmallestNumberAmongMixedElements(arr) {
  let nums = arr.filter(el => typeof el === 'number');
  return nums.length > 0 ? Math.min(...nums) : 0;
}
