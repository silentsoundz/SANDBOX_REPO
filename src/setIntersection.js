function setIntersection( arr1, arr2 ) {
  var resultArray = []

  if (( !arr1 || !arr2 ) ||
      (!Array.isArray( arr1 ) || !Array.isArray( arr1 ))) {
    return 'Not a valid input.'
  }
  for ( var index = 0; index < arr1.length; index++ ) {
    for ( var jindex = 0; jindex < arr2.length; jindex++ ) {
      if ( arr1[index] === arr2[jindex] ) {
        resultArray.push( arr1[index] )
      }
    }
  }
  return resultArray
}

module.exports = setIntersection
