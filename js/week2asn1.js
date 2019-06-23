/*
find largest number function without using math.max()
*/

function maxx(numbers) {
  var arr = numbers;
  var largest = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

console.log(maxx("1, 2, 3, 4"));

console.log(maxx("5, 2, 7, 1, 6"));
