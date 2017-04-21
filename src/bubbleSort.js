function bubbleSort ( arr ) {

  if ( !Array.isArray( arr ) ) {
    return 'This is not an array, fool'
  }

  for ( var index = 1; index < arr.length; index++ ) {
    for ( var jindex = 1; jindex < arr.length; jindex++ ) {
      if ( arr[jindex - 1] > arr[jindex] ) {
        var greaterNumber = arr[jindex]
        arr[jindex] = arr[jindex - 1]
        arr[jindex - 1] = greaterNumber
      }
    }
  }
  return arr
}

console.log(bubbleSort([1, 8, 4, 6, 2, 3]))
module.exports = bubbleSort
