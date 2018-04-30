function fibonacci() {
    return new Promise ((resolve, reject) => {
        let sequence = [1, 2]

        for (let i = 1; sequence[i] < 4000000 ; i++){
            let newNumber = sequence[i] + sequence[i - 1]
            sequence.push(newNumber)
            // console.log("NewNumber:", newNumber)
        }
        result = sequence
        resolve(result)
    })
}



fibonacci().then((result) => {
    let sum = 0
    for (let i = 0; i < result.length; i++) {
        if (result[i] % 2 === 0) {
            sum += result[i]
        }
    }
    console.log("Sum of evens:", sum)
    return sum
})

