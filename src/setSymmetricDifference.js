function setSymmetricDifference( array1, array2 ) {
  if ( !Array.isArray( array1 ) || !Array.isArray( array2 ) ) {
      return 'Not a valid input.'
  }

  return array1.filter( x => array2.indexOf(x) === -1 )
    .concat(array2.filter( x => array1.indexOf(x) === -1 ))

}


module.exports = setSymmetricDifference
