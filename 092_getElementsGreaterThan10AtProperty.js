function getElementsGreaterThan10AtProperty(obj, key) {
  let arr = Array.isArray(obj[key]) ? obj[key] : [];
  return arr.filter(num => num > 10);
}
