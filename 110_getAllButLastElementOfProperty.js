function getAllButLastElementOfProperty(obj, key) {
  return Array.isArray(obj[key]) ? obj[key].slice(0, -1) : [];
}
