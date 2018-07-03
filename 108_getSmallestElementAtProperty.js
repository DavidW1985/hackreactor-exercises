function getSmallestElementAtProperty(obj, key) {
  let arr = Array.isArray(obj[key]) ? obj[key].sort() : [];
  return arr[0];
}
