function collatzConjecture(num) {
  if ( typeof num !== 'number' ) {
    return ('You\'re not a number')
  }
  if ( num ===  1 ) {
    return [num]
  } else if ( num % 2 === 0 ) {
      //we have to hold onto the results from the prev iteration of collatzConjecture
    return [num].concat(collatzConjecture( num / 2))
  } else {
    return [num].concat(collatzConjecture( num * 3 + 1))
  }
}


module.exports = collatzConjecture
