// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ? 6857

function largestPrime(number) {
    let primes = []
    for (let i = 0; i <= Math.sqrt(number); i++) {
        let prime = true
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                prime = false
                break
            }
        }
        if (prime && number % i === 0) {
            primes.push(i)
        }
    }
    console.log(primes[primes.length - 1])
}

largestPrime(600851475143)