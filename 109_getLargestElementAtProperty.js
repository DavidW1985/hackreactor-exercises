function getLargestElementAtProperty(obj, key) {
  let arr = Array.isArray(obj[key]) ? obj[key].sort((a, b) => a < b) : [];
  return arr[0];
}
