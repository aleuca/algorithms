/**
 * Generates a string greeting for the
 * given array of names. Note that the
 * parameter is optional.
 * In the greeting you should use the
 * Oxford comma.
 * For example:
 * greet([ "A", "B", "C" ]) ===
 * "Hi A, B, and C!" and not "Hi A, B and C!"
 * (notice the comma before the "and").
 */

function greet(name) {
  let names = []
  let greeting = "Hi "
  let end = "!"
  if (typeof name === "string") {
    if(name === "") {
      names.push("Anonymous")
    } else {
      names.push(name)
    }
  }

  if (typeof name === "object") {
    for (let i = 0; i < name.length; i++) {
      if (name[i] === "") {
        names.push("Anonymous")
      } else {
        names.push(name[i])
      }
    }
  }

  greeting += names.join(", ") + end

  if (names[0] === undefined) {
    greeting = ''
  }

  if (names.length === 0) {
    greeting = "Hi!"
  }

  console.log(greeting)
  return greeting
}

greet(["al", "dan", ""])

describe('greet', function() {
  const assert = require('chai').assert;

  it('generates a nameless greeting for zero names', function() {
    assert.equal(greet(), "Hi!");
    assert.equal(greet([]), "Hi!");
  });

  it('generates a simple greeting for one name', function() {
    assert.equal(greet([ "Joe" ]), "Hi Joe!");
    assert.equal(greet([ "Potato" ]), "Hi Potato!");
  });

  it('greets all names', function() {
    assert.equal(greet([ "Joe", "Foo", "Bar" ]), "Hi Joe, Foo, and Bar!");
    assert.equal(greet([ "Bla", "Uh", "Baz", "Example" ]), "Hi Bla, Uh, Baz, and Example!");
  });

  it('generates a greeting for Anonymous for empty names', function() {
    assert.equal(greet([ "" ]), "Hi Anonymous!");
    assert.equal(greet([ "Eve", "Frank", "", "Peter" ]), "Hi Eve, Frank, Anonymous, and Peter!");
  });
});



// function greet(name) {
//   let names = []
//   let greeting = "Hi "
//   if (typeof name === "string") {
//     if(name === "") {
//       names.push("Anonymous")
//     } else {
//       names.push(name)
//     }
//   }

//   if (typeof name === "object") {
//     for (let i = 0; i < name.length; i++) {
//       if (name[i] === "") {
//         names.push("Anonymous")
//       } else {
//         names.push(name[i])
//       }
//     }
//   }


//   if (names[0] === undefined) {
//     greeting = ''
//   }

//   if (names.length === 0) {
//     greeting = "Hi!"
//   }

//   if (names.length === 1) {
//     greeting = "Hi " + `${names[0]}!`
//   }

//   for (let i = 0; i < names.length; i++) {

//     if (names.length > 1 && i === 0) {
//       greeting += `${names[i]}, `
//     }

//     if (i !== 0 && i !== names.length - 1) {
//         greeting += `${names[i]}, `
//     }

//     if (names.length > 1 && i === names.length - 1) {
//       greeting += `and ${names[i]}!`
//     }
//   }
//   console.log(greeting)
//   return greeting
// }

// greet(["al", "dan", ""])