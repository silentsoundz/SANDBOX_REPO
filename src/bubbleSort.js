function bubbleSort ( arr ) {

  for ( var index = 0; index < arr.length; index++ ) {
    if ( arr[index + 1] < arr[index] ) {
      var greaterNumber = arr[index]
      arr[index] = arr[index + 1]
      arr[index + 1] = greaterNumber 
    }
  }
  //loop through the array and compare the number at the index we are at with the number at the next index
  //if the number at the next index is less than the current index, swap the two numbers and keep going

  return arr

}


module.exports = bubbleSort
// #### bubbleSort
//
// Sort an array of numbers using the **bubble sort** algorithm.
//
// ```javascript
// bubbleSort([10, 2, 7, 5, 8, 3, 6, 1, 4, 9])
// // => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// ```
