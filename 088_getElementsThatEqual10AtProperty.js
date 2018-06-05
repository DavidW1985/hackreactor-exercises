function getElementsThatEqual10AtProperty(obj, key) {
  let numbers = Array.isArray(obj[key]) ? obj[key] : [];
  return numbers.filter(val => val === 10);
}
