import { expect } from 'chai'
import setComplement from '../src/setComplement'

describe( 'setComplement()', function(){

  it( 'should be a function', function(){
    expect( setComplement ).to.be.a( 'function' )
  })

  it( 'returns the complement of two sets.', function(){
    expect( setComplement([1, 2, 3, 4], [2, 4, 6, 8])).to.eql([6, 8])
  })
  it( 'returns the complement of two sets.', function(){
    expect( setComplement([1, 5, 3, 37], [37, 4, 8, 6])).to.eql([4, 8, 6])
  })
  it( 'returns an empty array if there is no complement.', function(){
    expect( setComplement([1, 5, 3, 37], [1, 5, 3, 37])).to.eql([])
  })
  it( 'only operates on two arrays.', function(){
    expect( setComplement([1, 2, 3, 4])).to.eql('Not a valid input.')
  })
  it( 'only operates on two arrays.', function(){
    expect( setComplement('hi')).to.eql('Not a valid input.')
  })
})

// #### setComplement
//
// Return the complement of two sets.
//
// ```javascript
// const a = [1, 2, 3, 4]
// const b = [2, 4, 6, 8]
// setComplement(a, b)
// // => [6, 8]
// ```
