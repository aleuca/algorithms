/**
 * Given a string, it "camelizes" by uppercasing every character at an even index,
 * and lowercasing every character at an odd index.
 * Returns the new string.
 */

//count letters
// index /2 -->capital
// index=/=2 -->lowercase
//output result

function camelize(string) {
  let output = ""
  for(let i = 0; i < string.length; i++) {
    if(i % 2 === 0) {
      //upercase
      let even = string[i].toUpperCase()
      output = output + even
    } else {
      //lowercase
      let odd = string[i].toLowerCase()
      output = output + odd
    }
  }
  console.log(output)
  return output
}

camelize("cheerios")













describe('camelize', function() {
  const assert = require("chai").assert;

  it('should work on empty strings', function() {
    assert.equal(camelize(""), "");
  });

  it('should work on single characters', function() {
    assert.equal(camelize("a"), "A");
    assert.equal(camelize("q"), "Q");
    assert.equal(camelize("5"), "5");
    assert.equal(camelize(" "), " ");
  });

  it('should work for pairs', function() {
    assert.equal(camelize("fo"), "Fo");
    assert.equal(camelize("AB"), "Ab");
    assert.equal(camelize("cY"), "Cy");
    assert.equal(camelize("Xd"), "Xd");
  });

  it('should work for longer strings', function() {
    assert.equal(camelize("lol"), "LoL");
    assert.equal(camelize("potato warrior"), "PoTaTo wArRiOr");
  });
});

// function camelize(word) {
//   let string = ""
//   for (const i = 0; i < word.length; i++) {
//     if (i % 2 === 0) {
//       let upper = word[i].toString()
//       let transform = upper.toUpperCase()
//       string = string.concat(transform)
//       continue
//     }
//     let lower = word[i].toString()
//     let transform2 = lower.toLowerCase()
//     string = string.concat(transform2)
//   }
//   return string
// }

// let word = camelize("hello")
// console.log(word)