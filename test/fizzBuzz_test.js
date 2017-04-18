import { expect } from 'chai'
import fizzBuzz from '../src/fizzBuzz'

describe( 'fizzBuzz()', function(){

  it( 'should be a function', function(){
    expect( fizzBuzz ).to.be.a( 'function' )
  })

  it( 'returns an object with all coin types (quarters, dimes, nickels, and pennies )', function(){
    const change = fizzBuzz({ price: 100, amountGiven: 100 })
    expect( change ).to.be.an( 'object' )
    expect( change ).to.have.keys( 'quarters', 'dimes', 'nickels', 'pennies' )
    expect( change ).to.deep.equal({
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0,
    })
  })
