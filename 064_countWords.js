function countWords(str) {
  return str.split(' ').reduce((acc, next) => {
    acc[next] ? acc[next]++ : acc[next] = 1;
    return next !== '' ? acc : {};
  }, {});
}
