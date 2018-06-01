function removeOddValues(obj) {
  let keys = Object.keys(obj);
  keys.forEach(function(key) {
    if (obj[key] % 2 !== 0) delete obj[key];
  });
}
