function isPalindrome(str) {
  var regex = /[^A-Za-z]/g
  var forwardStr = str.toLowerCase().replace(regex, '')
  var backwardsStr = forwardStr.split('').reverse().join('')

  return forwardStr === backwardsStr
}

module.exports = isPalindrome
