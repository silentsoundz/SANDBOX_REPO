function setIntersection( arr1, arr2 ) {
  var resultArray = []

  if (( !arr1 || !arr2 ) ||
      (!Array.isArray( arr1 ) || !Array.isArray( arr1 ))) {
    return 'Not a valid input.'
  }

  //if there is only one parameter or if either input is not an array
    //return 'Not a valid input.'
  //sort the arrays ( when we have merge sort writte )
  //loop through 1
    //loop through 2
      //if 1[index] === 2[index]
        //arr.push 1[index]
  //return arr
  return resultArray
}

console.log(setIntersection([1, 2, 3, 4], [2, 4, 6, 8]))

module.exports = setIntersection

// #### setIntersection
//
// Return the intersection of two sets.

// ```javascript
// const a = [1, 2, 3, 4]
// const b = [2, 4, 6, 8]
// setIntersection(a, b)
// // => [2, 4]
// ```
