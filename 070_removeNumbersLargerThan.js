function removeNumbersLargerThan(num, obj) {
  let keys = Object.keys(obj);
  keys.forEach(function(key) {
    if (obj[key] > num) delete obj[key];
  });
}
