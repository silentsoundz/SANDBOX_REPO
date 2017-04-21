import { expect } from 'chai'
import bubbleSort from '../src/bubbleSort'

describe( 'bubbleSort()', function(){

  it( 'should be a function', function(){
    expect( bubbleSort ).to.be.a( 'function' )
  })

  it( 'Sorts an array of numbers using the bubble sort algorithm.', function(){
    expect( bubbleSort([1, 8, 4, 6, 2, 3])).to.eql([1, 2, 3, 4, 6, 8])
  })

  it( 'Sorts an array of numbers using the bubble sort algorithm.', function(){
    expect( bubbleSort([1, 2, 3, 4, 40],[2, ,4, 6, 8, 60] )).to.eql([1, 2, 3, 4, 6, 8, 40, 60])
  })

  it( 'only operates on an array.', function(){
    expect( bubbleSort( 1, 2 )).to.eql('This is not an array, fool')
  })
})



  // #### bubbleSort
  //
  // Sort an array of numbers using the **bubble sort** algorithm.
  //
  // ```javascript
  // bubbleSort([10, 2, 7, 5, 8, 3, 6, 1, 4, 9])
  // // => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  // ```
