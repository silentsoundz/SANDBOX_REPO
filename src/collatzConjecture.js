function collatzConjecture( num ) {
  var collatzArray= []

  if ( typeof num !== 'number' ) {
    return 'You\'re not a number'
  }
  collatzArray.push( num )
  if ( collatzArray[collatzArray.length - 1] ===  1 ) {
    return collatzArray
  }
//initial check to make sure that input is correct input
  //if it isn't, return 'you're not a number'
//push the number to the array
//check the number at the end/top of the array
//if it is 1
  //return the array
//if it is even, divide by 2
//push that result to our array
//if it is odd, multiply by 3, then add 1
//push that result to our array

}

console.log(collatzConjecture(1))

module.exports = collatzConjecture
// #### collatzConjecture
//
// Return the Collatz sequence for a given number.
//
// The Collatz sequence for any positive integer `n` is defined as follows:
//
// > If `n` is even, divide it by 2 to get `n / 2`. If `n` is odd, multiply it by 3 and add 1 to obtain `3n + 1`. Repeat the process until you reach 1.
//
// ```javascript
// collatzConjecture(1)
// // => [1]
//
// collatzConjecture(7)
// // => [7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1]
