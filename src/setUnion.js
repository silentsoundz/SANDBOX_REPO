var mergeSort = require( './mergeSort')

function setUnion( array1, array2 ) {
var resultArray = array1

  if ( !Array.isArray( array1 ) || !Array.isArray( array2 )) {
     return 'This is not an array, fool'
  }

  for ( var index = 0; index < array1.length; index++ ) {
    for ( var jindex = 0; jindex < array2.length; jindex++ ) {
      if ( array1[index] ===  array2[jindex] ) {
        resultArray.splice( index, 1 )
      }
    }
  }
  return mergeSort(resultArray.concat(array2))
}

module.exports = setUnion
