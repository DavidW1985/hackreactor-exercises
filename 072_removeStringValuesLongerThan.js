function removeStringValuesLongerThan(num, obj) {
  let keys = Object.keys(obj);
  keys.forEach(function(key) {
    if (obj[key].length > num) delete obj[key];
  });
}
