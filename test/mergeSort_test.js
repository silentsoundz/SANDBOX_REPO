import { expect } from 'chai'
import mergeSort from '../src/mergeSort'

describe( 'mergeSort()', function(){

  it( 'should be a function', function(){
    expect( mergeSort ).to.be.a( 'function' )
  })

  it( 'Sorts an array of numbers using the merge sort algorithm.', function(){
    expect( mergeSort([1, 11, 3, 4, 33, 6, 8])).to.eql([1, 3, 4, 6, 8, 11, 33])
  })
  it( 'Sorts an array of numbers using the merge sort algorithm.', function(){
    expect( mergeSort([8, 6, 7, 5, 3, 0, 9])).to.eql([0, 3, 5, 6, 7, 8, 9])
  })
  it( 'only operates on an array.', function(){
    expect( mergeSort( 1 )).to.eql('Not a valid input.')
  })
  it( 'only operates on an array.', function(){
    expect( mergeSort('hi')).to.eql('Not a valid input.')
  })
})
