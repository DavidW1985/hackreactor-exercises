function fromListToObject(array) {
  return array.reduce((acc, next) => {
    acc[next[0]] = next[1];
    return acc;
  }, {});
}
