function binarySearch( arr, number ) {
  var midpoint = Math.floor( arr.length/2 - 1 )
  var minIndex = 0
  var maxIndex = arr.length - 1

  if ( !Array.isArray( arr ) ) {
      return 'This is not an array, fool'
  }
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

module.exports = binarySearch
