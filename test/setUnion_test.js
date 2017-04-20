import { expect } from 'chai'
import setUnion from '../src/setUnion'

describe( 'setUnion()', function(){

  it( 'should be a function', function(){
    expect( setUnion ).to.be.a( 'function' )
  })

  it( 'Returns the union of two sets.', function(){
    expect( setUnion([1, 2, 3, 4],[2, 4, 6, 8] )).to.eql([1, 2, 3, 4, 6, 8])
  })

  it( 'Returns the union of two sets.', function(){
    expect( setUnion([1, 2, 3, 4, 40],[2, ,4, 6, 8, 60] )).to.eql([1, 2, 3, 4, 6, 8, 40, 60])
  })

  it( 'only operates on two arrays.', function(){
    expect( setUnion( 1, 2 )).to.eql('This is not an array, fool')
  })
})
