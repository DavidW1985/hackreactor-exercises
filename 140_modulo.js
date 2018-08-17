function modulo(num1, num2) {
  let multiple = Math.floor(Math.abs(num1) / Math.abs(num2));
  let remainder = Math.abs(num1) - (Math.abs(num2) * multiple);
  return num1 < 0 ? remainder * -1 : remainder;
}
