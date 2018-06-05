function select(arr, obj) {
  return arr.reduce((acc, next) => {
    if (obj[next]) acc[next] = obj[next];
    return acc;
  }, {});
}
