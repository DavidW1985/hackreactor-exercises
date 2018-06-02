function addToFrontOfNew(arr, element) {
  let newArr = arr.slice();
  newArr.unshift(element);
  return newArr;
}
