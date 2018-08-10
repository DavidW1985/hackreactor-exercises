function getProductOfAllElementsAtProperty(obj, key) {
  return Array.isArray(obj[key]) && obj[key].length > 0 ? obj[key].reduce((a, b) => a * b) : 0;
}
