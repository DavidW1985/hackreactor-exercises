function extend(obj1, obj2) {
  let keys = Object.keys(obj2);
  keys.forEach(function(key) {
    if (!obj1[key]) obj1[key] = obj2[key];
  });
}
