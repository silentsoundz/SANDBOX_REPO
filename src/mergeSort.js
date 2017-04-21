function mergeSort ( array ) {

  if ( !Array.isArray( array )) {
    return 'Not a valid input.'
  }
  if ( array.length < 2 ) {
    return array
  }
  var left = array.slice( 0, Math.floor(array.length/2))
  var right = array.slice( Math.floor(array.length/2), array.length )

  return stitch(mergeSort(left), mergeSort(right))

  function stitch ( left, right ) {
    var sortedArray = []

    while ( left.length && right.length) {
      if ( left[0] < right[0] ) {
        sortedArray.push(left.shift())
      } else {
        sortedArray.push(right.shift())
      }
    }
    while (left.length)
       sortedArray.push(left.shift());

    while (right.length)
       sortedArray.push(right.shift());

    return sortedArray
  }
}

module.exports = mergeSort
