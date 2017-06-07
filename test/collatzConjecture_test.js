import { expect } from 'chai'
import collatzConjecture from '../src/collatzConjecture'

describe( 'collatzConjecture()', function(){

  it( 'should be a function', function(){
    expect( collatzConjecture ).to.be.a( 'function' )
  })

  it( 'Returns the Collatz sequence for a given number.', function(){
    expect( collatzConjecture(7)).to.eql([7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1])

