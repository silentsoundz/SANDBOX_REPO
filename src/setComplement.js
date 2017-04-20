//ES5 implementation
// function setComplement( array1, array2 ) {
//
//   return array2.filter( function(x) { return array1.indexOf(x) === -1 })
// }

//ES6 implementation
const setComplement = ( array1, array2 ) => {
  if ( !Array.isArray( array1 ) || !Array.isArray( array2 ) ) {
      return 'Not a valid input.'
  }

  return array2.filter( x => array1.indexOf(x) === -1 )
}

module.exports = setComplement
