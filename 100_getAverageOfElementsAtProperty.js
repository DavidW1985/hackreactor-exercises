function getAverageOfElementsAtProperty(obj, key) {
  let arr = Array.isArray(obj[key]) ? obj[key] : [];
  return arr.length > 0 ? arr.reduce((a, b) => a + b) / arr.length : 0;
}
