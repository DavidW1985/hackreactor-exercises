// You will be given an array that contains two strings. Your job is to create a function
// that will take those two strings and transpose them, so that the strings go from top to bottom
// instead of left to right.

// e.g. transposeTwoStrings(['Hello','World']);

// should return:
// H W
// e o
// l r
// l l
// o d

function transposeTwoStrings(arr) {
  for (var i = 0; i < arr[0].length; i++) {
    console.log(arr[0].charAt(i), arr[1].charAt(i));
  }
}

let output = transposeTwoStrings(['Hello','World']);
console.log(output);
