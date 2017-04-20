import { expect } from 'chai'
import setIntersection from '../src/setIntersection'

describe( 'setIntersection()', function(){

  it( 'should be a function', function(){
    expect( setIntersection ).to.be.a( 'function' )
  })

  it( 'returns the intersection of two sets.', function(){
    expect( setIntersection([1, 2, 3, 4], [2, 4, 6, 8])).to.eql([2, 4])
  })
  it( 'returns the intersection of two sets.', function(){
    expect( setIntersection([1, 5, 3, 37], [37, 4, 8, 6])).to.eql([37])
  })
  it( 'returns an empty array if there is no intersection.', function(){
    expect( setIntersection([1, 5, 3, 37], [7, 4, 8, 6])).to.eql([])
  })
  it( 'only operates on two arrays.', function(){
    expect( setIntersection([1, 2, 3, 4])).to.eql('Not a valid input.')
  })
  it( 'only operates on two arrays.', function(){
    expect( setIntersection('hi')).to.eql('Not a valid input.')
  })
})
