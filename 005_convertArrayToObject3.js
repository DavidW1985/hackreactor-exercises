function transformEmployeeData(array) {
  return array.map(function(arr) {
    return arr.reduce(function(acc, next) {
      acc[next[0]] = next[1];
      return acc;
    }, {});
  });
}
