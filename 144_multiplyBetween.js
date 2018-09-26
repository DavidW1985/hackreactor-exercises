function multiplyBetween(num1, num2) {
  let nums = [];
  for (var i = num1; i < num2; i++) {
    nums.push(i);
  }
  return num2 > num1 ? nums.reduce((a, b) => a * b) : 0;
}
