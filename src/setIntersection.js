function setIntersection( array1, array2 ) {
  var resultArray = []

  if (( !array1 || !array2 ) ||
      (!Array.isArray( array1 ) || !Array.isArray( array1 ))) {
    return 'Not a valid input.'
  }
  for ( var index = 0; index < array1.length; index++ ) {
    for ( var jindex = 0; jindex < array2.length; jindex++ ) {
      if ( array1[index] === array2[jindex] ) {
        resultArray.push( array1[index] )
      }
    }
  }
  return resultArray
}

module.exports = setIntersection
