import { expect } from 'chai'
import setSymmetricDifference from '../src/setSymmetricDifference'

describe( 'setSymmetricDifference()', function(){

  it( 'should be a function', function(){
    expect( setSymmetricDifference ).to.be.a( 'function' )
  })

  })
  it( 'only operates on two arrays.', function(){
    expect( setSymmetricDifference([1, 2, 3, 4])).to.eql('Not a valid input.')
  })
  it( 'only operates on two arrays.', function(){
    expect( setSymmetricDifference('hi')).to.eql('Not a valid input.')
  })
})
