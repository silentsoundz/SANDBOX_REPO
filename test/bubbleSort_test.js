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
    expect( bubbleSort([66, 40, 3, 4])).to.eql([3, 4, 40, 66])
  })

  it( 'only operates on an array.', function(){
    expect( bubbleSort( 1, 2 )).to.eql('This is not an array, fool')
  })
})
