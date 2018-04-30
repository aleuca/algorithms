/**
 * Given an array of numbers, it performs some analysis on it and returns the results as an object. The attributes of the object should be as follows:
 * - min: the smallest number in the array
 * - max: the largest number in the array
 * - sum: the sum of all numbers in the array
 * - avg: the average of all numbers in the array
 */



function summarize(array) {
  const newObject = {}
  let sum = 0
  let avg = 0
  let minimum = array[0]
  let maximum = array[0]

  if(array.length === 0) {
    newObject.sum = null
    newObject.avg = null
    newObject.min = null
    newObject.max = null
    return newObject
  }

  for (let i = 0; i < array.length; i++) {
    sum += array[i]

    if (minimum > array[i]) {
      minimum = array[i]
    }

    if (maximum < array[i]) {
      maximum = array[i]
    }

    if (i === array.length - 1) {
      avg = sum / array.length
      newObject.sum = sum
      newObject.avg = avg
      newObject.min = minimum
      newObject.max = maximum
    }
  }
  return newObject
}

summarize([1,21,52,66])

// loop through array to find minimum number
// loop through array to find maximum number
// while looping add all the numbers into a sum
// assign mimimum to an object with the key min:
// assign maximum to an object with the key max:
// assign sum to an object with the key sum:
// when at the last element of the array calculate average
// assign average to an object with the key avg:






describe('summarize', function() {
  const assert = require('chai').assert;

  it('should work for empty array', function() {
    assert.deepEqual(summarize([]), {
      min: null,
      max: null,
      sum: null,
      avg: null
    });
  });

  it('should work for trivial arrays', function() {
    assert.deepEqual(summarize([ 42 ]), {
      min: 42,
      max: 42,
      sum: 42,
      avg: 42
    });
  });

  it('should work on simple arrays', function() {
    assert.deepEqual(summarize([ 1, 2, 3, 4, 5 ]), {
      min: 1,
      max: 5,
      sum: 15,
      avg: 3
    });
  });

  it('should work with negative numbers', function() {
    assert.deepEqual(summarize([ -7, 3, 3, 0, 7, 42 ]), {
      min: -7,
      max: 42,
      sum: 48,
      avg: 8
    });
  });
});