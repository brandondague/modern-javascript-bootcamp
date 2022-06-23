const add = function () {
    const args = Object.values(arguments)
    let sum = 0
    args.forEach(arg => sum += arg)
    return sum
}

console.log(add(11, 22, 33, 44))

const car = {
    color: "Red",
    getSummary: function () {
        return `The car is ${this.color}`
    }
}

console.log(car.getSummary())