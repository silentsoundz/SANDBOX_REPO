import { expect } from 'chai'
import setSymmetricDifference from '../src/setSymmetricDifference'

describe( 'setSymmetricDifference()', function(){

  it( 'should be a function', function(){
    expect( setSymmetricDifference ).to.be.a( 'function' )
  })

  it( 'returns the complement of two sets.', function(){
    expect( setSymmetricDifference([1, 2, 3, 4], [2, 4, 6, 8])).to.eql([1, 3, 6, 8])
  })
  it( 'returns the complement of two sets.', function(){
    expect( setSymmetricDifference([1, 5, 3, 37], [37, 4, 8, 6])).to.eql([1, 5, 3, 4, 8, 6])
  })
  it( 'returns an empty array if there is no complement.', function(){
    expect( setSymmetricDifference([1, 5, 3, 37], [1, 5, 3, 37])).to.eql([])
  })
  it( 'only operates on two arrays.', function(){
    expect( setSymmetricDifference([1, 2, 3, 4])).to.eql('Not a valid input.')
  })
  it( 'only operates on two arrays.', function(){
    expect( setSymmetricDifference('hi')).to.eql('Not a valid input.')
  })
})
