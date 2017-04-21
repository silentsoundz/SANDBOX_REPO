import { expect } from 'chai'
import binarySearch from '../src/binarySearch'

describe( 'binarySearch()', function(){

  it( 'should be a function', function(){
    expect( binarySearch ).to.be.a( 'function' )
  })

  it( 'Search for a number within an array using the binary search algorithm.', function(){
    expect( binarySearch([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 45)).to.equal(8)
  })

  it( 'Search for a number within an array using the binary search algorithm.', function(){
    expect( binarySearch([1, 2, 3, 4, 6, 8], 3)).to.equal(2)
  })

  it( 'returns -1 if the second input does not exist in the array.', function(){
    expect( binarySearch([1, 2, 3, 4, 6, 8], 37)).to.equal(-1)
  })

  it( 'only takes an array as a first input.', function(){
    expect( binarySearch( 1, 2 )).to.eql('This is not an array, fool')
  })
})
// #### binarySearch
//
// Search for a number within an array using the **binary search** algorithm.
// [Binary Search](https://en.wikipedia.org/wiki/Binary_search_algorithm) looks for an item in a list by looking at a list's center, then looking at the center of the left or right half, continually dividing the search space in half until it finds what it's looking for.
//
// ```javascript
// const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
// binarySearch(numbers, 45)
// // => 8
// ```
