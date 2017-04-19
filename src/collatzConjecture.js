function collatzConjecture(num) {
  if ( typeof num !== 'number' ) {
    return ('You\'re not a number')
  }
  if ( num ===  1 ) {
    let result = [num]
    return result
  } else if ( num % 2 === 0 ) {
      //we have to hold onto the results from the prev iteration of collatzConjecture
    let result = [num].concat(collatzConjecture( num / 2))
    return result
  } else {
    let result = [num].concat(collatzConjecture( num * 3 + 1))
    return result
  }
  return collatzArray
}


module.exports = collatzConjecture
