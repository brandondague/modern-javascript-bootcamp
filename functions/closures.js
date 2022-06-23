// Message
// const myFunc = () => {
//     const message = "This is my message"
//     const printMessage = () => {
//         console.log(message)
//     }
//     return printMessage
// }

// const myPrintMessage = myFunc()
// myPrintMessage()

// Counter
// const createCounter = () => {
//     let count = 0

//     return {
//         increment() {
//             count++
//         },
//         decrement() {
//             count--
//         },
//         getCount() {
//             return count
//         }
//     }
// }

// const counter = createCounter()
// counter.increment()
// console.log(counter.getCount())
// counter.decrement()
// console.log(counter.getCount())
// counter.decrement()
// console.log(counter.getCount())

// Adder
// const createAdder = (a) => {
//     return (b) => {
//         return a + b
//     }
// }

// const add10 = createAdder(10)
// console.log(add10(-2))
// console.log(add10(20))
// const add100 = createAdder(100)
// console.log(add100(-50))

// Tipper
const createTipper = (tip) => {
    return (bill) => {
        return bill * tip
    }
}

const tip15 = createTipper(.15)
const tip20 = createTipper(.2)
const tip25 = createTipper(.25)

console.log(tip15(50))
console.log(tip20(50))
console.log(tip25(50))