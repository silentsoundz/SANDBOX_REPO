import { expect } from 'chai'
import binarySearch from '../src/binarySearch'

describe( 'binarySearch()', function(){

  it( 'should be a function', function(){
    expect( binarySearch ).to.be.a( 'function' )
  })



  it( 'Search for a number within a sorted array using the binary search algorithm.', function(){
    expect( binarySearch([1, 2, 3, 4, 6, 8], 3)).to.equal(2)
  })

 fool')
  })
})
