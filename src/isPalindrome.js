function isPalindrome(str) {
  var stack = []

  str = str.toLowerCase()
  for ( var index = 0; index < str.length; index++ ) {
    stack.push( str[index] )
  }
  for ( var index = 0; index < str.length; index++ ) {
    console.log('HEREEEEEE', stack[stack.length - 1]);
    if ( str[index] === stack[stack.length - 1] ) {
      stack.pop()
    }
  }
  if ( stack.length > 0 ) {
    console.log(str);
    console.log(stack);
     return false
  }
  console.log(stack);
  return true
}

console.log(isPalindrome('racec'));
module.exports = isPalindrome
// Determine if a string is a palindrome. Return `true` or `false`.
//
// Ignore punctuation, spacing, and case sensitivity.
//
// ```javascript
// isPalindrome('radar')
// // => true
//
// isPalindrome('bananas')
// // => false
//
// isPalindrome('A man, a plan, a canal: Panama')
// // => true
// ```

['h']
