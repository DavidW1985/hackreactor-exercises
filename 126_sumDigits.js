function sumDigits(num) {
  let nums = num.toString().split('');
  if (nums[0] === '-') nums.shift(), nums[0] = '-' + nums[0];
  return nums.reduce((a, b) => Number(a) + Number(b), 0);
}
