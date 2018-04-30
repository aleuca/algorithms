// // A palindromic number
// reads the same both ways.
// The largest palindrome
// made from the product of
// two 2-digit numbers is
// 9009 = 91 × 99.
// // Find the largest
// palindrome made from
//  the product of two
//   3-digit numbers.



function products() {
    let arr = []
    let productArray = []
    for (let i = 999; i >= 999 / 2; i--) {
        for (let j = 100; j <= 999 / 2; j++) {
            product = i * j
            productArray.push(product)
        }
    }
    // console.log(productArray)
    return productArray
}

let array = products()

function isPalindrome () {
    for(let i = 0; i < array.length; i++) {
        // console.log(array[i])
        let eachItemInArray = array[i]
        for (let j = 0; j < eachItemInArray.length; j++) {
            console.log(eachItemInArray)
        }
    }
}

isPalindrome()
