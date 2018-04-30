/**
 * Given a string, counts the number of words inside it. Each word is separated by a single space character.
 */

function countWords(str) {
  if(typeof str == "string") {
    let sentence = str.split(" ")
    let length = sentence.length
    if(str == "") {
      length = 0
     }
     console.log(sentence, length)
     return length
  } else {
    console.log("pls no")
  }
}

countWords("hello I am al")

describe('countWords', function() {
  const assert = require("chai").assert;

  it('should work for empty strings', function() {
    assert.equal(countWords(""), 0);
  });

  it('should work for simple strings', function() {
    assert.equal(countWords("a b c"), 3);
    assert.equal(countWords("hello"), 1);
    assert.equal(countWords("hello world"), 2);
  });

  it('shound not work for numbers', function() {
    assert.equal(undefined, countWords(5));
  });
});