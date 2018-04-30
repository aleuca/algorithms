/**
 * Determines whether the given string is a palindrome, i.e. if you were to reverse the order of the characters inside the string, you would get back the original string.
 */

let word = ""
let palindrome = false


function isPalindrome (word) {
  for (const i = 0; i < (word.length - 1) / 2; i++){
    if(word[i] === word[word.length - 1 - i]) {
      console.log("match")
      continue
    }
    console.log("not a palindrome")
    return false
  }
  console.log("palindrome!")
  return true
}


isPalindrome("racecar")



describe('isPalindrome', function() {
  const assert = require("chai").assert;

  it('works for empty string', function() {
    assert.isTrue(isPalindrome(''));
  });

  it('works for single characters', function() {
    assert.isTrue(isPalindrome('x'));
    assert.isTrue(isPalindrome('c'));
  });

  it('works for double characters', function() {
    assert.isTrue(isPalindrome('xx'));
    assert.isTrue(isPalindrome('gg'));
    assert.isFalse(isPalindrome('af'));
    assert.isFalse(isPalindrome('yt'));
  });

  it('works for words', function() {
    assert.isTrue(isPalindrome('racecar'));
    assert.isFalse(isPalindrome('potato'));
  });

});