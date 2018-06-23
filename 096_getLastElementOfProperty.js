function getLastElementOfProperty(obj, key) {
  return Array.isArray(obj[key]) ? obj[key].pop() : [][0];
}
