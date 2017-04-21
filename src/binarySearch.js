function binarySearch( array, number ) {
  var minIndex = 0
  var maxIndex = array.length - 1

  function calculateMidpoint( min, max ) {
    return Math.floor(( minIndex + maxIndex) / 2 )
  }

  var midpoint = calculateMidpoint( minIndex, maxIndex )

  if ( !Array.isArray( array ) ) {
      return 'This is not an array, fool'
  }
  while ( minIndex !== maxIndex ) {
    if( array[midpoint] === number ) {
      return midpoint
    } else if ( array[midpoint] < number ) {
      minIndex = midpoint + 1
      midpoint = calculateMidpoint( minIndex, maxIndex )
    } else if ( array[midpoint] > number ) {
      maxIndex = midpoint - 1
      midpoint = calculateMidpoint( minIndex, maxIndex )
    }
  }
  if( array[midpoint] === number ) {
    return midpoint
  }
  return -1
}

module.exports = binarySearch
