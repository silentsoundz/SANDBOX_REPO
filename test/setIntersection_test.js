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
  it( 'only operates on two arrays.', function(){
    expect( setIntersection([1, 2, 3, 4])).to.eql('Not a valid input.')
  })
  it( 'only operates on two arrays.', function(){
    expect( setIntersection('hi')).to.eql('Not a valid input.')
  })
})

// #### setIntersection
//
// Return the intersection of two sets.
//
// ```javascript
// const a = [1, 2, 3, 4]
// const b = [2, 4, 6, 8]
// setIntersection(a, b)
// // => [2, 4]
// ```
