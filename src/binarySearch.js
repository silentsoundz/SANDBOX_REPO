function binarySearch( arr, number ) {
  var midpoint = Math.floor( arr.length/2 - 1 )
  var minIndex = 0
  var maxIndex = arr.length - 1

  while ( minIndex !== maxIndex ) {
    if( arr[midpoint] === number ) {
      return midpoint
    } else if ( arr[midpoint] < number ) {
      minIndex = midpoint + 1
      midpoint = Math.floor((minIndex + maxIndex)/2)
    } else if ( arr[midpoint] > number ) {
      maxIndex = midpoint - 1
      midpoint = Math.floor((minIndex + maxIndex)/2)
    }
  }
  if( arr[midpoint] === number ) {
    return midpoint
  }
  return -1
}


  //return stuff


console.log( binarySearch([6,7,8,9, 10, 30, 88, 89, 100, 123], 89));
module.exports = binarySearch
// #### binarySearch
//
// Search for a number within an array using the **binary search** algorithm.
// [Binary Search](https://en.wikipedia.org/wiki/Binary_search_algorithm) looks for an item in a list by looking at a list's center, then looking at the center of the left or right half, continually dividing the search space in half until it finds what it's looking for.
//
// ```javascript
// const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
// binarySearch(numbers, 45)
// // => 8
// ```
