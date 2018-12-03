// Given a list of non-negative integers and a target sum, find a pair of numbers that sums to the target sum.

// Example:

// var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
// console.log(pair); // --> [4, 5]

function findPairForSum(arr, target) {
  let pair = [];
  arr.forEach(el => {
    if (arr.includes(target - el)) {
      pair.push(el, target - el);
    }
  });
  return pair.slice(0, 2);
}

let findPair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(findPair);
