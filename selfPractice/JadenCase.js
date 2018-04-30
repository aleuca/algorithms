class Sentence {
    constructor(string) {
        this.string = string
    }
}



Sentence.prototype.toJadenCase = function () {
    let words = this.string.split(" ")
    let jadenSentence = []
    words.forEach(element => {
        let newWord = element[0].toUpperCase() + element.slice(1)
        jadenSentence.push(newWord)
    })
    console.log(jadenSentence)
    return jadenSentence.join(" ")
}



let hello = new Sentence("hello I am alinaleuca")
let log = hello.toJadenCase()
console.log(log)