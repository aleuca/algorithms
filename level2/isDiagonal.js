/**
 * Determines whether the given
 *  matrix (two-dimensional array
 * of numbers) is diagonal, as in,
 * all numbers outside of the main
 * diagonal are 0. A cell belongs to
 * the main diagonal, if its X
 * coordinate is equal to its Y
 * coordinate.
 */



// the input is an array of arrays
// take the first array of the input
// loop through the array and make sure
// that everything besides the
// first character is 0
// if condition is false return false
// if condition is true move to next
// array and check that everything
// besides the second character is 0
// if false return false
// if true move to next array
// continue by checking index + 1 of
// every array


function isDiagonal(array) {

  for (let i = 0; i < array.length; i++) {
    const nested = array[i]
    for (let j = 0; j < nested.length; j++) {
      if (j !== i && nested[j] !== 0) {
        return false
      }
    }
  }
  return true
}












describe('isDiagonal', function() {
  const assert = require('chai').assert;

  it('should work on empty matrices', function() {
    assert.isTrue(isDiagonal([]));
  });

  // a trivial matrix is one that only contains a single value
  it('should work on trivial matrices', function() {
    assert.isTrue(isDiagonal([ [ 5 ] ]));
  });

  it('should detect diagonal matrices', function() {
    assert.isTrue(isDiagonal([
      [ 2, 0 ],
      [ 0, 1 ]
    ]));

    assert.isTrue(isDiagonal([
      [ 0, 0, 0 ],
      [ 0, 9, 0 ],
      [ 0, 0, 3 ]
    ]));

    assert.isTrue(isDiagonal([
      [ 1, 0, 0 ],
      [ 0, 1, 0 ],
      [ 0, 0, 1 ]
    ]));

    assert.isTrue(isDiagonal([
      [ 7, 0, 0, 0 ],
      [ 0, 1, 0, 0 ],
      [ 0, 0, 4, 0 ],
      [ 0, 0, 0, 0 ]
    ]));
  });

  it('should not have false positives', function() {
    assert.isFalse(isDiagonal([
      [ 1, 2 ],
      [ 0, 0 ]
    ]));

    assert.isFalse(isDiagonal([
      [ 2, 0 ],
      [ 1, 1 ]
    ]));

    assert.isFalse(isDiagonal([
      [ 0, 0, 5 ],
      [ 0, 5, 0 ],
      [ 5, 0, 0 ]
    ]));

    assert.isFalse(isDiagonal([
      [ 4, 0, 0, 0 ],
      [ 0, 0, 9, 3 ],
      [ 0, 0, 0, 0 ],
      [ 0, 2, 0, 5 ]
    ]));
  });
});