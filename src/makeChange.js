function makeChange({price, amountGiven}) {
  var changeHolder = {
    'quarters': 0,
    'dimes': 0,
    'nickels': 0,
    'pennies': 0
  }

  return changeHolder;
}

makeChange({ price: 100, amountGiven: 100 })
module.exports = makeChange

// #### makeChange
//
// Given a price and an amount paid, return the number of coins in each denomination that should be given as change.
//
// _Note: because JavaScript is [bad at decimal math](http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html), the inputs are given as integers that represent dollar + cent amounts, so `139` = $1.39._

// ```javascript
// makeChange({ price: 100, amountGiven: 100 })
// // => { quarters: 0, dimes: 0, nickels: 0, pennies: 0 }
//
// makeChange({ price: 159, amountGiven: 200 })
// // => { quarters: 1, dimes: 1, nickels: 1, pennies: 1 }
//
// makeChange({ price: 432, amountGiven: 500 })
// // => { quarters: 2, dimes: 1, nickels: 1, pennies: 3 }
// ```
