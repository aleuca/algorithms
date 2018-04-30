/**
 * Generates the first N prime numbers.
 */

function genPrimes(num) {
  let primes = [];
  let isPrime = true
  let i = 1
  while (primes.length < num) {
    i++
    isPrime = true
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false
        break
      }
    }
    if(isPrime) {
      primes.push(i)
    }
  }
  console.log(primes)
  return primes
}




genPrimes(1)

describe('genPrimes', function() {
  const assert = require("chai").assert;

  it('should be able to generate 0 primes', function() {
    assert.deepEqual(genPrimes(0), []);
  });

  it('should be able to generate a single prime', function() {
    assert.deepEqual(genPrimes(1), [ 2 ]);
  });

  it('should be able to generate a few primes', function() {
    assert.deepEqual(genPrimes(3), [ 2, 3, 5 ]);
    assert.deepEqual(genPrimes(5), [ 2, 3, 5, 7, 11 ]);
  });
});