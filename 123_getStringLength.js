function getStringLength(string) {
  return string.split('').reduce((acc, next) => {
    acc++;
    return acc;
  }, 0);
}
